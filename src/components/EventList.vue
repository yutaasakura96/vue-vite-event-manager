<template>
  <!-- Error message if there's an issue loading the events -->
  <template v-if="error">
    <ErrorCard :retry="fetchEvents">
      Could not load Events at the moment. Please try again.
    </ErrorCard>
  </template>

  <!-- Event listing -->
  <template v-else>
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- When loading is complete -->
      <template v-if="!loading">
        <!-- If events are available -->
        <template v-if="events.length">
          <EventCard
            v-for="event in events"
            :key="event.id"
            :title="event.title"
            :when="event.date"
            :location="event.location"
            :description="event.description"
            @register="$emit('register', event)"
          />
        </template>

        <!-- No events message -->
        <template v-else>
          <div class="col-span-2 text-center text-gray-500">No events yet.</div>
        </template>
      </template>

      <!-- Loading state -->
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

/// Fetch Events from Ticketmaster API
const fetchEvents = async () => {
  loading.value = true;
  error.value = null;

  // Replace with your Ticketmaster API key
  const apiKey = 'Gq6s1BuKGfH9qh1kneCJwID8u2440MrF';
  const limit = 10;
  const page = 30;
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&size=${limit}&page=${page}`;

  try {
    // Fetch the events from Ticketmaster API
    const response = await fetch(url);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    // Check if events are embedded in the response
    if (data._embedded && data._embedded.events) {
      const eventData = data._embedded.events;

      // Filter events that have a non-empty description
      events.value = eventData
        .filter((event) => event.info && event.info.trim())
        .map((event) => ({
          id: event.id,
          title: event.name,
          description: event.info,
          date: event.dates.start.localDate,
          location: `${event._embedded.venues[0].name}, ${event._embedded.venues[0].city.name}`
        }));
    } else {
      console.log('No events found for the specified country.');
    }
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
  console.log(events.value);
};

onMounted(() => {
  fetchEvents();
});
</script>
