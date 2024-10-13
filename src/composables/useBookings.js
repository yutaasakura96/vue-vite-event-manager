import { ref } from 'vue';

const bookings = ref([]);

// Find booking by booking ID
const findBookingById = (id) => {
  return bookings.value.findIndex((booking) => booking.id === id);
};

// Handle user registration for an event
const handleRegistration = (event) => {
  // Check if the user is already registered for this event
  if (bookings.value.some((booking) => booking.eventId === event.id && booking.userId === 1)) {
    alert('You have already registered for this event');
    return;
  }

  // Prepare the new booking object
  const newBooking = {
    id: Date.now().toString(),
    userId: 1, // Static user ID for simplicity
    eventId: event.id,
    eventTitle: event.title,
    status: 'confirmed'
  };

  // Add the new booking to the bookings array
  bookings.value.push(newBooking);
  console.log('Registered successfully:', newBooking);
};

// Handle cancellation of a booking
const cancelBooking = (bookingId) => {
  const index = findBookingById(bookingId);
  if (index !== -1) {
    bookings.value.splice(index, 1);
    console.log(`Booking with ID ${bookingId} cancelled.`);
  } else {
    console.error('Booking not found');
  }
};

export default function useBookings() {
  return {
    bookings,
    handleRegistration,
    cancelBooking
  };
}
