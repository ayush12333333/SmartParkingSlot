import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { UserContext } from "../context/UserContext";
import { toast } from "react-hot-toast";
import LoginForm from "../components/LoginForm";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(formData.email, formData.password);
      const decoded = jwtDecode(data.token);
      const role = decoded.role;
     
      if (!role) {
        toast.error("Role is NUll");
        return;
      }

      login(data.token, role); // stores in context + localStorage
      toast.success("Login successful");

      // Redirect based on role
      if (role === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user");
      }

    } catch (err) {
        if(err.message==="Invalid password"){
             toast.error("wrong password"); 
        }
        else{
            toast.error("Signup first "); 
        }
    }


  };

  return (
   
    <LoginForm
      title="Login"
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    >

    <p>
      Don't have an account?{" "}
      <Link
        to="/signup"
        className="text-blue-600 hover:underline font-semibold"
      >
        Sign up
      </Link>
    </p>
  </LoginForm>
  );
};

export default Login;

