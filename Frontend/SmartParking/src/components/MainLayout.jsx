// src/layouts/MainLayout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* This renders the matched child route */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
