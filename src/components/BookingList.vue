<template>
  <section class="grid grid-cols-1 gap-4">
    <!-- If there are bookings -->
    <template v-if="bookings.length > 0">
      <BookingItem
        v-for="booking in bookings"
        :key="booking.id"
        :title="booking.eventTitle"
        :status="booking.status"
        @cancelled="cancelBooking(booking.id)"
      />
    </template>

    <!-- If there are no bookings -->
    <template v-else>
      <div class="text-center text-gray-500">No bookings yet.</div>
    </template>
  </section>
</template>
<script setup>
import BookingItem from '@/components/BookingItem.vue';
import useBookings from '@/composables/useBookings';

// Import the `useBookings` composable to manage bookings
const { bookings, cancelBooking } = useBookings();
</script>
