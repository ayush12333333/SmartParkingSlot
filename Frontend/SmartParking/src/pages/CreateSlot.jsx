// pages/CreateSlot.jsx
import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { toast } from "react-hot-toast";
import CreateSlotForm from "../components/CreateSlotForm";

const CreateSlot = () => {
  const [slotData, setSlotData] = useState({
    slotNumber: "",
    location: "",
    
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSlotData((prev) => ({
      ...prev,
      [name]: value,
      fareAmount: name === "vehicleType" ? (value === "BIKE" ? 20 : 40) : prev.fareAmount,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch(
      `http://localhost:8083/api/parking/create?location=${encodeURIComponent(slotData.location)}&vehicleType=${slotData.vehicleType}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    console.log("Slot created:", data);
    toast.success("Slot created successfully");
  } catch (err) {
    console.error("Error:", err);
    toast.error(err.message || "Failed to create slot");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Create Parking Slot</h2>
        <CreateSlotForm
          slotData={slotData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
};

export default CreateSlot;
