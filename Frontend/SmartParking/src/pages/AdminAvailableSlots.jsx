// pages/AdminAvailableSlots.js
import React, { useState } from "react";
import { fetchAvailableSlots } from "../services/bookingAvailService";

const AdminAvailableSlots = () => {
  const [location, setLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("ALL");
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handleSearch = async () => {
    if (!location) {
      alert("Please enter a location.");
      return;
    }

    setLoading(true);
    try {
      const result = await fetchAvailableSlots(location, vehicleType, token);
      setSlots(Array.isArray(result) ? result : []);
    } catch (err) {
      console.error("Error:", err.message);
      alert("Failed to fetch available slots");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Check Available Slots</h2>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="ALL">All</option>
          <option value="CAR">Car</option>
          <option value="BIKE">Bike</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {slots.length === 0 ? (
            <p>No available slots found.</p>
          ) : (
            <table className="w-full bg-white rounded shadow overflow-x-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                  <th className="py-2 px-4">Slot No</th>
                  <th className="py-2 px-4">Location</th>
                  <th className="py-2 px-4">Available</th>
                  <th className="py-2 px-4">Booked At</th>
                  <th className="py-2 px-4">Booked By</th>
                </tr>
              </thead>
              <tbody>
                {slots.map((slot) => (
                  <tr key={slot.id} className="text-center border-t">
                    <td className="py-2 px-4">{slot.slotNumber}</td>
                    <td className="py-2 px-4">{slot.location}</td>
                    <td className="py-2 px-4">
                      {slot.available ? "Yes" : "No"}
                    </td>
                    <td className="py-2 px-4">
                      {slot.bookedAt ? new Date(slot.bookedAt).toLocaleString() : "-"}
                    </td>
                    <td className="py-2 px-4">
                      {slot.bookedByName
                        ? `${slot.bookedByName} (${slot.bookedByEmail})`
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default AdminAvailableSlots;
