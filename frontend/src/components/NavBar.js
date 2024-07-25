// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 px-6 lg:px-16">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-4" />
          <h1 className="text-xl font-bold">YourSite</h1>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#subscribe" className="hover:underline">Subscribe</a>
          <a href="#testimonial" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
