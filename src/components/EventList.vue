<template>
  <div>
    <template v-if="error">
      <ErrorCard :retry="fetchEvents">Could not load Events at the moment. Please try again.</ErrorCard>
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
              @register="handleRegistration(event)"
              @information="openUrl(event.url)"
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

      <PaginationComponent
        :currentPage="currentPage"
        :totalPages="totalPages"
        @changePage="handlePageChange"
        class="flex justify-center mt-10"
      />
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EventCard from '@/components/EventCard.vue';
import LoadingEventCard from '@/components/LoadingEventCard.vue';
import ErrorCard from '@/components/ErrorCard.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import useBookings from '@/composables/useBookings';

const { openUrl, handleRegistration } = useBookings();

const events = ref([]);
const loading = ref(false);
const error = ref(null);
const currentPage = ref(1);
const totalPages = ref(1);

const apiKey = import.meta.env.VITE_API_KEY;
const limit = 10;

// Function to fetch events based on the current page
const fetchEvents = async (page = 1) => {
  loading.value = true;
  error.value = null;

  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&size=${limit}&page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data._embedded && data._embedded.events) {
      events.value = data._embedded.events.map(event => ({
        id: event.id,
        title: event.name,
        date: event.dates.start.localDate,
        description: event.info || 'No Event description available',
        location: event._embedded.venues[0].name,
        image: event.images[0]?.url,
        url: event.url,
      }));

      totalPages.value = data.page.totalPages;
    } else {
      events.value = [];
    }
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};

// Handle when user changes the page
const handlePageChange = (page) => {
  currentPage.value = page;
  fetchEvents(page);
};

// Fetch initial events when the component is mounted
onMounted(() => {
  fetchEvents(currentPage.value);
});
</script>
