import React from "react";

const UserHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-3">
      <h1 className="text-3xl font-bold text-yellow-700 mb-4">
        Welcome to Smart Parking!
      </h1>
      <p className="text-gray-700 text-lg mb-6 text-center max-w-xl">
        Book your parking slot with ease and manage your bookings anytime. Use the navigation above to get started.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <img
            src="https://t3.ftcdn.net/jpg/12/14/58/14/360_F_1214581465_AloEgGtzVFrbK4xn4cmX3pCaDA601JSE.jpg"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Easy Booking</h2>
            <p className="text-gray-600 mt-2">
              Find and reserve parking slots for cars and bikes anytime, anywhere.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <img
            src="https://www.workitdaily.com/media-library/young-professional-man-looking-excited-at-his-desk-because-he-s-confident-that-he-s-found-a-job-he-s-passionate-about.jpg?id=22021161&width=1200&height=800&quality=85&coordinates=0%2C0%2C0%2C0"
            alt="Parking System"
            className="w-full h-70 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Manage Your Slots</h2>
            <p className="text-gray-600 mt-2">
              View your current bookings, cancel or checkout easily from your dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
