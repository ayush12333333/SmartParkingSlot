// pages/AdminAllBookings.js
import React, { useEffect, useState } from "react";
import { fetchAllBookings } from "../services/bookingService";
import BookingList from "../components/BookingList";

const AdminAllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const getBookings = async () => {
      try {
        const data = await fetchAllBookings(token);
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err.message);
      } finally {
        setLoading(false);
      }
    };

    getBookings();
  }, [token]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">All Bookings (Admin)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : bookings.length > 0 ? (
        <BookingList bookings={bookings} />
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default AdminAllBookings;
