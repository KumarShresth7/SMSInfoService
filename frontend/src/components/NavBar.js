// src/components/Navbar.js
import React from 'react';
import original from "../assets/original.png"

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-0 left-0 w-full bg-gray-800 text-white py-4 px-6 lg:px-16 bg-gradient-to-r from-indigo-500 to-indigo-800 ">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src={original} alt="Logo" className="h-8 mr-4" />
          <h1 className="text-xl font-bold">NotifyGenie</h1>
        </div>

        {/* Navigation Links */}
        <div className="space-x-5">
          <a href="#hero" className=" text-lg hover:text-indigo-500">Home</a>
          <a href="#about" className=" text-lg hover:text-indigo-500">About</a>
          <a href="#services" className=" text-lg hover:text-indigo-500">Services</a>
          <a href="#subscribe" className="text-lg hover:text-indigo-500">Subscribe</a>
          <a href="#testimonial" className=" text-lg hover:text-indigo-500">Testimonials</a>
          <a href="#contact" className=" text-lg hover:text-indigo-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
