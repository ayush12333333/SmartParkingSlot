import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo on the left */}
                    <Link
                        to="/"
                        className="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:ring-gray-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                    >
                        Smart Parking
                    </Link>

                    {/* Right side nav links */}
                    <div className="flex items-center space-x-6">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-sm font-medium ${
                                    isActive ? "text-orange-700" : "text-gray-700"
                                } hover:text-orange-700`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-sm font-medium ${
                                    isActive ? "text-orange-700" : "text-gray-700"
                                } hover:text-orange-700`
                            }
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `text-sm font-medium ${
                                    isActive ? "text-orange-700" : "text-gray-700"
                                } hover:text-orange-700`
                            }
                        >
                            Login
                        </NavLink>

                        <Link
                            to="/signup"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
