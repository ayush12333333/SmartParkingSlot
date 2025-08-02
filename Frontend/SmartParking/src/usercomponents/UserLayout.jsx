import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UserLayout = () => {
  const linkClass =
    "transition duration-200 text-sm font-medium hover:text-yellow-300";
  const activeClass = "text-yellow-300 underline";

  return (
    <div className="min-h-screen bg-orange-100">
      <nav className="bg-orange-700 text-white px-8 py-4 shadow flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide">SmartParking</div>

        <div className="flex gap-6">
          <NavLink
            to="/user" end 
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/user/book"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Book Now
          </NavLink>
          <NavLink
            to="/user/bookings"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            My Bookings
          </NavLink>
          <NavLink
            to="/user/updateprofile"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            User Profile
          </NavLink>
          <NavLink
            to="/user/logout"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Logout
          </NavLink>
        </div>
      </nav>

      <main className="p-0">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
