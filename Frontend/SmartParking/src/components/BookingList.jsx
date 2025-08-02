// components/BookingList.js
import React from "react";

const BookingList = ({ bookings }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Booking ID</th>
            <th className="py-3 px-6 text-left">User Email</th>
            <th className="py-3 px-6 text-left">Slot Number</th>
            <th className="py-3 px-6 text-left">Location</th>
            <th className="py-3 px-6 text-left">Check-In</th>
            <th className="py-3 px-6 text-left">Check-Out</th>
            <th className="py-3 px-6 text-left">Fare</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {bookings.map((b) => (
            <tr key={b.bookingId} className="border-b">
              <td className="py-2 px-6">{b.bookingId}</td>
              <td className="py-2 px-6">{b.userEmail}</td>
              <td className="py-2 px-6">{b.slotNumber}</td>
              <td className="py-2 px-6">{b.location}</td>
              <td className="py-2 px-6">{new Date(b.checkInTime).toLocaleString()}</td>
              <td className="py-2 px-6">{new Date(b.checkOutTime).toLocaleString()}</td>
              <td className="py-2 px-6">₹{b.fareAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
