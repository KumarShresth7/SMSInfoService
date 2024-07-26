// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-400 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">© 2024 YourSite. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#subscribe" className="hover:underline">Subscribe</a>
          <a href="#testimonial" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
