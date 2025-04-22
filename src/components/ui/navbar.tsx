import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-[1442px] mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              className="w-24 h-auto object-contain"
              alt="QuickRent Furnish Logo"
              src="/image.png"
            />
          </Link>
          <span className="font-extrabold text-black text-sm">
            QUICKRENT FURNISH
          </span>
        </div>

        <div className="flex items-center gap-8">
          <Link to="/" className="text-black hover:text-gray-600">
            Home
          </Link>
          <Link to="/categories" className="text-black hover:text-gray-600">
            Categories
          </Link>
          <Link to="/new-arrivals" className="text-black hover:text-gray-600">
            New Arrivals
          </Link>
          <Button variant="outline" className="ml-4">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};