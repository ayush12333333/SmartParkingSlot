
import React from "react";


const CreateSlotForm = ({ slotData, handleChange, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-md max-w-lg w-full space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Create New Parking Slot
      </h2>

      {/* Location Input */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          {/* <MapPin className="inline mr-1" size={16} /> */}
          Location
        </label>
        <input
          type="text"
          name="location"
          value={slotData.location}
          onChange={handleChange}
          placeholder="Enter location"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          required
        />
      </div>

      {/* Vehicle Type Dropdown */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          {/* <Car className="inline mr-1" size={16} /> */}
          Vehicle Type
        </label>
        <select
          name="vehicleType"
          value={slotData.vehicleType}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          required
        >
          <option value="">Select vehicle type</option>
          <option value="CAR">Car</option>
          <option value="BIKE">Bike</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition font-semibold"
      >
        Create Slot
      </button>
    </form>
  );
};

export default CreateSlotForm;
