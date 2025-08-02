import React from "react";


export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/10">
                        <img
                            src="https://img.freepik.com/premium-vector/cartoon-businessman-uses-laptop-work-comes-up-with-new-ideas_7647-643.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Smart Parking
                        </h2>
                        <p className="mt-6 text-gray-600">
                            SmartParking is an intelligent parking management system designed to solve modern urban parking problems mostly near metro stations. It helps both users and administrators manage parking slots efficiently using a digital interface.
                        </p>

                       <h3 className="text-xl text-gray-900 font-semibold mt-6">
    Why Choose SmartParking?
  </h3>
<p className="mt-4 text-gray-600">
  🚗 Real-time slot availability <br />
  📍 Location-based slot filtering <br />
  🧾 Auto fare calculation with late checkout penalty <br />
  📱 Easy booking, cancellation, and checkout process <br />
  🧑‍💼 Separate dashboards for users and admins <br />
  🔐 Secure login and signup with JWT Authentication <br />
  📊 Role-based access control (User/Admin) <br />
  ✅ Vehicle-type specific slot allocation  <br />
  ⏱️ Accurate check-in and check-out time tracking <br />
  📂 User profile management and booking history view <br />
  💳 Transactional consistency during booking & checkout <br />
  🛡️ Secure fare processing with rollback on failure
</p>

                    </div>
                </div>
            </div>
        </div>
    );
}