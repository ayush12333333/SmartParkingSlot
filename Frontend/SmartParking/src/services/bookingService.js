// services/bookingService.js


export const fetchAllBookings = async (token) => {
  const response = await fetch(`https://smart-parking-slot-render.onrender.com/api/bookings/admin/all-bookings`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return await response.json();
};


