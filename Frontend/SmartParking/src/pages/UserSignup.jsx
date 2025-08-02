import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/authService";
import { toast } from "react-hot-toast";
import SignupForm from "../components/SignupForm";

const UserSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "USER",
  });

  const showCustomToast = (type, message) => {
    const bgColor =
      type === "success"
        ? "border-green-400 text-green-700"
        : type === "error"
        ? "border-red-400 text-red-700"
        : "border-gray-300 text-gray-700";

    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } bg-white shadow-lg rounded-lg border ${bgColor} p-4 w-80 flex items-start space-x-3`}
      >
        <div className="text-xl">
          {type === "success" ? "✅" : type === "error" ? "❌" : "ℹ️"}
        </div>
        <div className="text-sm font-medium">{message}</div>
      </div>
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupUser(formData);
      showCustomToast("success", "Signup successful!");
      navigate("/login");
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message ||
        "Signup failed. This user may already exist.";
      showCustomToast("error", errorMessage);
    }
  };

  return (
    <SignupForm
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  );
};

export default UserSignup;
