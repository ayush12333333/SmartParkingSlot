import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./pages/Login";
import UserSignup from "./pages/UserSignup";




import { Toaster } from "react-hot-toast";
import AdminDashboard from "./pages/AdminDashboard";
import CreateSlot from "./pages/CreateSlot";
import AdminAllBookings from "./pages/AdminAllBookings";
import AdminAvailableSlots from "./pages/AdminAvailableSlots";


import UserLayout from "./usercomponents/UserLayout"; 
import UserHome from "./userpages/UserHome";
import BookNow from "./userpages/BookNow";
import MyBookings from "./userpages/MyBookings";
import UpdateProfile from "./userpages/UpdateProfile"
import Logout from "./userpages/Logout";


function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout/>} >
         <Route index element={<Home />} />
         <Route path="about" element={<About/>}/>
         
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<UserSignup />} />
        
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/create-slot" element={<CreateSlot />} />
        <Route path="/admin/bookings" element={<AdminAllBookings />} />
        <Route path="/admin/available" element={<AdminAvailableSlots />} />

        <Route path="/user/*" element={<UserLayout />}>
          <Route index element={<UserHome />} />
          <Route path="book" element={<BookNow />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="updateprofile" element={<UpdateProfile/>}/>
          <Route path="logout" element={<Logout />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
