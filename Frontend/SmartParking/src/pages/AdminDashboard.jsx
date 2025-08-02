// pages/AdminDashboard.jsx
import React from "react";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        {/* Welcome Card */}
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-7 mb-8">
          <img
            src="https://www.pngkey.com/png/full/263-2635979_admin-abuse.png"
            alt="Admin Avatar"
            className="w-22 h-20 rounded-full border-4 border-yellow-400"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              Welcome, Admin 👨‍💼
            </h1>
            <p className="text-gray-600 text-sm">
              Here admin can manage parking slots, view bookings, and more.
            </p>
          </div>
        </div>

        {/* Placeholder for Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Total Slots</h2>
            <p className="text-3xl font-bold text-yellow-500">42</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Active Bookings</h2>
            <p className="text-3xl font-bold text-green-500">17</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Checked Out</h2>
            <p className="text-3xl font-bold text-blue-500">25</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
