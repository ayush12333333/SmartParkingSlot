// src/pages/LandingPage.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;