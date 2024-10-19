<template>
  <template v-if="error">
    <ErrorCard :retry="fetchBookings">
      Could not load Bookings at the moment. Please try again.
    </ErrorCard>
  </template>
  <template v-else>
    <section class="grid grid-cols-1 gap-4">
      <!-- Display the loading skeletons if loading -->
      <template v-if="loading">
        <LoadingBookingItem v-for="i in 4" :key="i" />
      </template>

      <!-- If not loading and there are no bookings, display a message -->
      <template v-else-if="bookings.length === 0">
        <div class="text-center text-gray-500">
          There are no bookings yet, Please register for an event to get started!
        </div>
      </template>

      <!-- If there are bookings, display the BookingItem components -->
      <template v-else>
        <BookingItem
          v-for="booking in bookings"
          :key="booking.id"
          :title="booking.eventTitle"
          :status="booking.status"
          @cancelled="cancelBooking(booking.id)"
        />
      </template>
    </section>
  </template>
</template>

<script setup>
import { onMounted } from 'vue';
import BookingItem from '@/components/BookingItem.vue';
import LoadingBookingItem from '@/components/LoadingBookingItem.vue';
import useBookings from '@/composables/useBookings';
import ErrorCard from '@/components/ErrorCard.vue';

const { bookings, loading, fetchBookings, cancelBooking, error } = useBookings();

// Fetch bookings when the component is mounted
onMounted(() => {
  fetchBookings();
});
</script>
