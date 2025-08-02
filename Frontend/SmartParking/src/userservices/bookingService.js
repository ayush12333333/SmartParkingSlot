const BASE_URL = "http://localhost:8083/api/bookings";

export const getUserBookings = async () => {
  const res = await fetch(`${BASE_URL}/my-bookings`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.json();
};

export const cancelBooking = async (bookingId) => {
  const res = await fetch(`${BASE_URL}/cancel/${bookingId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.json();
};

export const checkoutBooking = async (slotId) => {
  const res = await fetch(`http://localhost:8083/api/bookings/checkout/${slotId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"), // ✅ Must add token
    },
  });

 const text = await res.text();
  return { message: text };
};

