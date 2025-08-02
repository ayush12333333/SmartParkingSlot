const BASE_URL = "https://smart-parking-slot-render.onrender.com/api";

export const getAvailableSlots = async (location, vehicleType) => {
  const res = await fetch(
    `${BASE_URL}/parking/available?location=${location}&vehicleType=${vehicleType}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const contentType = res.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    return res.json(); 
  } else {
    const text = await res.text(); 
    return { error: text };
  }
};

export const bookSlot = async (slotId, hours) => {
  const res = await fetch(`${BASE_URL}/bookings/book/${slotId}?hours=${hours}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.json();
};
