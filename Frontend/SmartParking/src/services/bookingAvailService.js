// services/bookingService.js

export const fetchAvailableSlots = async (location, vehicleType, token) => {
  const response = await fetch(
    `http://localhost:8083/api/parking/available?location=${location}&vehicleType=${vehicleType}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch available slots");
  }

  return await response.json();
};
