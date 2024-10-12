<template>
  <template v-if="error">
    <ErrorCard :retry="fetchBookings"
      >Could not load Bookings at the moment. Please try again.</ErrorCard
    >
  </template>
  <templat v-else>
    <section class="grid grid-cols-1 gap-4">
      <template v-if="!loading">
        <BookingItem
          v-for="booking in bookings"
          :key="booking.id"
          :title="booking.eventTitle"
          :status="booking.status"
          @cancelled="cancelBooking(booking.id)"
        />
      </template>
      <template v-else>
        <LoadingBookingItem v-for="i in 4" :key="i" />
      </template>
    </section>
  </templat>
</template>

<script setup>
import { onMounted } from 'vue';
import BookingItem from '@/components/BookingItem.vue';
import LoadingBookingItem from '@/components/LoadingBookingItem.vue';
import useBookings from '@/composables/useBookings';
import ErrorCard from '@/components/ErrorCard.vue';

const { bookings, loading, fetchBookings, cancelBooking, error } = useBookings();

onMounted(() => {
  fetchBookings();
});
</script>
