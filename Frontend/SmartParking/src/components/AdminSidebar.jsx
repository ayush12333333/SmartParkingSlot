// components/AdminSidebar.jsx
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import {
  LayoutDashboard,
  PlusCircle,
  ClipboardList,
  ParkingCircle,
  LogOut,

} from "lucide-react";

const AdminSidebar = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  

  const handleLogout = () => {
    const confirmLogout = window.confirm("Do you really want to logout?");
    if (confirmLogout) {
      logout();
      navigate("/login");
    }
  };

  return (
    <div className="w-64 h-screen bg-gray-950 text-white p-6 shadow-lg flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-extrabold text-yellow-400 mb-8 tracking-wide">
          Admin Panel
        </h2>
        <nav className="space-y-4 text-sm font-medium">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link
            to="/admin/create-slot"
            className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
          >
            <PlusCircle size={20} />
            Create Slot
          </Link>
          <Link
            to="/admin/bookings"
            className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
          >
            <ClipboardList size={20} />
            View Bookings
          </Link>
          <Link
            to="/admin/available"
            className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
          >
            <ParkingCircle size={20} />
            Available Slots
          </Link>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors"
      >
        <LogOut size={20} />
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
