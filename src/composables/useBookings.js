import { ref } from 'vue';

const bookings = ref([]);
const loading = ref(false);

// Fetch bookings from mock API
const fetchBookings = async () => {
  loading.value = true;
  try {
    const response = await fetch('http://localhost:3001/bookings');
    bookings.value = await response.json();
  } finally {
    loading.value = false;
  }
};

const findBookingById = (id) => {
  return bookings.value.findIndex((booking) => booking.id === id);
};

// Handle user registration for an event
const handleRegistration = async (event) => {
  // Check if the user is already registered for this event
  if (bookings.value.some((booking) => booking.eventId === event.id && booking.userId === 1)) {
    alert('You already registered for this event');
    return;
  }

  // Prepare the new booking object
  const newBooking = {
    id: Date.now().toString(),
    userId: 1,
    eventId: event.id,
    eventTitle: event.title,
    status: 'pending'
  };

  // Push the new booking before confirmation (optimistic UI)
  bookings.value.push(newBooking);

  // Try registering the booking on the server
  try {
    const response = await fetch('http://localhost:3001/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newBooking,
        status: 'confirmed'
      })
    });

    // Handle successful booking confirmation
    if (response.ok) {
      const index = findBookingById(newBooking.id);

      // Replace pending booking with confirmed one
      bookings.value[index] = await response.json();
    } else {
      throw new Error('Failed to confirm booking');
    }
  } catch (error) {
    console.error('Failed to register for event:', error);
    // Remove the pending booking if the request fails
    bookings.value = bookings.value.filter((booking) => booking.id !== newBooking.id);
  }
};

const cancelBooking = async (bookingId) => {
  const index = findBookingById(bookingId);
  const originalBooking = bookings.value[index];
  bookings.value.splice(index, 1);

  try {
    const response = await fetch(`http://localhost:3001/bookings/${bookingId}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Booking could not be cancelled.');
    }
  } catch (error) {
    console.error('Failed to cancel booking:', error);
    bookings.value.splice(index, 0, originalBooking);
  }
};

export default function useBookings() {
  return {
    bookings,
    loading,
    fetchBookings,
    handleRegistration,
    cancelBooking
  };
}
