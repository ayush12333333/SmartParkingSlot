import React, { useEffect, useState } from "react";
import {
  getUserBookings,
  cancelBooking,
  checkoutBooking,
} from "../userservices/bookingService";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    getUserBookings().then(setBookings);
  }, [refresh]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const handleCancel = async (id) => {
    if (!window.confirm("❗ Are you sure you want to cancel this booking?")) return;
    const res = await cancelBooking(id);
    showToast(res.message || "Booking cancelled.");
    setRefresh(!refresh);
  };

  const handleCheckout = async (id) => {
    if (!window.confirm("🛑 Checkout this slot now?")) return;

    try {
      const res = await checkoutBooking(id);
      showToast(res.message || "Checked out successfully.");
      setRefresh(!refresh);
    } catch (err) {
      console.error("Checkout error:", err);
      showToast(err.message || "Failed to checkout. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">🅿️ My Bookings</h2>

      {toast && (
        <div className="mb-4 px-4 py-2 rounded bg-blue-100 text-blue-800 shadow text-center transition-all">
          {toast}
        </div>
      )}

      {bookings.length === 0 ? (
        <p className="text-gray-600 text-center">No bookings found.</p>
      ) : (
        bookings.map((b) => (
          <div
            key={b.id}
            className="p-4 mb-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition-all space-y-2"
          >
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold text-blue-600">Slot #{b.slotNumber}</h3>
              <span
                className={`px-2 py-1 text-sm rounded font-semibold ${
                  b.checkedOut
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {b.checkedOut ? "✅ Checked Out" : "🟢 Active"}
              </span>
            </div>

            <p><strong>Location:</strong> {b.location}</p>
            <p><strong>Vehicle:</strong> {b.vehicleType}</p>
            <p><strong>Fare:</strong> ₹{b.fareAmount}</p>

            <p>
              <strong>Check-In:</strong>{" "}
              {new Date(b.checkInTime).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}{" "}
              |{" "}
              {new Date(b.checkInTime).toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>

            <p><strong>Booked Hours:</strong> {b.reservedHours}</p>

            {!b.checkedOut && (
              <div className="mt-3 flex gap-4">
                <button
                  onClick={() => handleCancel(b.slotId)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded transition"
                >
                  ❌ Cancel
                </button>
                <button
                  onClick={() => handleCheckout(b.slotId)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded transition"
                >
                  🔓 Checkout
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MyBookings;
