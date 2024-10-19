import { ref, onMounted } from 'vue';

const bookings = ref([]);
const loading = ref(false);
const error = ref(null);

// Fetch bookings from local storage with error handling
const fetchBookings = () => {
  loading.value = true;
  error.value = null;

  try {
    const storedBookings = localStorage.getItem('bookings');
    if (storedBookings) {
      try {
        bookings.value = JSON.parse(storedBookings);
      } catch (parseError) {
        error.value = new Error('Failed to parse bookings from local storage.');
        bookings.value = [];
      }
    } else {
      bookings.value = [];
    }
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};

// Helper function to find a booking by its ID
const findBookingById = (id) => {
  return bookings.value.findIndex((booking) => booking.id === id);
};

// Handle user registration for an event
const handleRegistration = (event) => {
  if (bookings.value.some((booking) => booking.eventId === event.id && booking.userId === 1)) {
    alert('You are already registered for this event.');
    return;
  }

  // Prepare the new booking object with a "pending" status
  const newBooking = {
    id: Date.now().toString(),
    userId: 1,
    eventId: event.id,
    eventTitle: event.title,
    status: 'pending'
  };

  bookings.value.push(newBooking);

  localStorage.setItem('bookings', JSON.stringify(bookings.value));

  // Simulate a delay before confirming the booking
  setTimeout(() => {
    const index = findBookingById(newBooking.id);
    if (index !== -1) {
      bookings.value[index].status = 'confirmed';

      localStorage.setItem('bookings', JSON.stringify(bookings.value));
    }
  }, 3000);
};

// Handle booking cancellation
const cancelBooking = (bookingId) => {
  const index = findBookingById(bookingId);

  if (index !== -1) {
    bookings.value.splice(index, 1);
    localStorage.setItem('bookings', JSON.stringify(bookings.value));
  } else {
    alert('Booking not found.');
  }
};

// Handle opening an external URL
const openUrl = (url) => {
  if (url) {
    window.open(url, '_blank'); // Open the URL in a new tab
  } else {
    alert('No URL provided');
  }
};

// Mount the hook to fetch bookings when the component is mounted
export default function useBookings() {
  onMounted(() => {
    fetchBookings();
  });

  return {
    bookings,
    loading,
    error,
    fetchBookings,
    handleRegistration,
    cancelBooking,
    openUrl
  };
}
