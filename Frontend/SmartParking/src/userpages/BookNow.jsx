import React, { useState } from "react";
import { getAvailableSlots, bookSlot } from "../userservices/slotService";
import { toast } from "react-hot-toast";

const BookNow = () => {
  const [location, setLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("CAR");
  const [slots, setSlots] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [hours, setHours] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await getAvailableSlots(location, vehicleType);

    if (data.error) {
      setSlots([]);
      toast.error(data.error);
    } else setSlots(data);

    setShowForm(false);
  };

  const handleBookClick = (slotId) => {
    setSelectedSlotId(slotId);
    setShowModal(true);
  };

  const handleConfirmBooking = async () => {
    if (!hours || isNaN(hours) || Number(hours) <= 0) {
      toast.error("Please enter valid number of hours.");
      return;
    }

    const res = await bookSlot(selectedSlotId, hours);
    toast.success(`✅ Booking successful! Fare: ₹${res.fareAmount}`);
    setShowModal(false);
    setHours("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        🚗 Book Your Parking Slot
      </h2>

      <div className="flex justify-center">
        {showForm ? (
          <form
            onSubmit={handleSearch}
            className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg space-y-5"
          >
            <div>
              <label className="block font-semibold mb-1">
                📍 Location (City)
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                placeholder="e.g., Delhi"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">🚘 Vehicle Type</label>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              >
                <option value="CAR">CAR</option>
                <option value="BIKE">BIKE</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
            >
              Show Available Slots
            </button>
          </form>
        ) : (
          <div className="w-full max-w-4xl">
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline font-medium mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m-7.5-7.5L4.5 12l7.5 7.5"
                />
              </svg>
              Change Filters
            </button>

            {slots.length === 0 ? (
              <p className="text-center text-gray-600">
                No available slots found.
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {slots.map((slot) => (
                  <div
                    key={slot.id}
                    className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition"
                  >
                    <p>
                      <strong>Slot:</strong> {slot.slotNumber}
                    </p>
                    <p>
                      <strong>Location:</strong> {slot.location}
                    </p>
                    <p>
                      <strong>Fare:</strong> ₹{slot.fareAmount}
                    </p>
                    <button
                      onClick={() => handleBookClick(slot.id)}
                      className="mt-3 bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded-md transition"
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal for hours input */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg space-y-4">
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Enter Booking Hours
            </h3>
            <input
              type="number"
              min="1"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              placeholder="e.g., 2"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmBooking}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookNow;
