<template>
  <template v-if="error">
    <ErrorCard :retry="fetchEvents"
      >Could not load Events at the moment. Please try again.</ErrorCard
    >
  </template>
  <template v-else>
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <template v-if="!loading">
        <template v-if="events.length">
          <EventCard
            v-for="event in events"
            :key="event.id"
            :title="event.title"
            :when="event.date"
            :description="event.description"
            :location="event.location"
            :url="event.url"
            :image="event.image"
            @register="$emit(handleRegistration(event))"
          />
        </template>
        <template v-else>
          <div class="col-span-2 text-center text-gray-500">No events yet.</div>
        </template>
      </template>

      <template v-else>
        <LoadingEventCard v-for="i in 4" :key="i" />
      </template>
    </section>
  </template>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const events = ref([]);
const loading = ref(false);
const error = ref(null);

import EventCard from '@/components/EventCard.vue';
import LoadingEventCard from '@/components/LoadingEventCard.vue';
import ErrorCard from '@/components/ErrorCard.vue';
import useBookings from '@/composables/useBookings';

const { handleRegistration } = useBookings();

// // Fetch events from mock API
// const fetchEvents = async () => {
//   loading.value = true;
//   error.value = null;
//   try {
//     const response = await fetch('http://localhost:3001/events');
//     events.value = await response.json();
//   } catch (e) {
//     error.value = e;
//   } finally {
//     loading.value = false;
//   }
// };

// Fetch events from TICKETMASTER API
const apiKey = import.meta.env.VITE_API_KEY;
const limit = 10;
const page = 5;
const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&size=${limit}&page=${page}`;

const fetchEvents = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const seenLocations = new Set();

    events.value = data._embedded.events
    // Filter for events with descriptions
      .filter((event) => event.info)
      .map((event) => {
        return {
          id: event.id,
          title: event.name,
          date: event.dates.start.localDate,
          description: event.info,
          location: event._embedded.venues[0].name,
          image: event.images[0]?.url,
          url: event.url
        };
      })
      .filter((event) => {
        // Only keep events with unique locations
        if (seenLocations.has(event.location)) {
          return false;
        } else {
          // Track the location
          seenLocations.add(event.location);
           // Keep the event if it's the first with that location
          return true;
        }
      });
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchEvents();
});
</script>
