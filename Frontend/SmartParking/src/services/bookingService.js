// services/bookingService.js


export const fetchAllBookings = async (token) => {
  const response = await fetch(`http://localhost:8083/api/bookings/admin/all-bookings`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return await response.json();
};


