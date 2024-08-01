import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/original.png';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col lg:flex-row items-center mb-6 lg:mb-0 text-center lg:text-left">
          <img src={logo} alt="YourSite Logo" className="w-36 h-auto mr-0 lg:mr-6 mb-4 lg:mb-0" />
          <p className="text-lg">“The best way to predict the future is to create it.”</p>
        </div>
        <div className="text-center mb-6 lg:mb-0">
          <p className="text-lg mb-4">&copy; 2024 NotifyGenie. All rights reserved.</p>
          <div className="mb-6 flex flex-wrap justify-center hidden lg:flex">
            <a href="#about" className="mx-2 lg:mx-4 hover:underline text-lg">About</a>
            <a href="#services" className="mx-2 lg:mx-4 hover:underline text-lg">Services</a>
            <a href="#subscribe" className="mx-2 lg:mx-4 hover:underline text-lg">Subscribe</a>
            <a href="#testimonial" className="mx-2 lg:mx-4 hover:underline text-lg">Testimonials</a>
            <a href="#contact" className="mx-2 lg:mx-4 hover:underline text-lg">Contact</a>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.instagram.com/k.shresth_?igsh=aGY0czI3Ynk1Y3dr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200" aria-label="Visit our Instagram page">
              <FaInstagram size={24} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/kumar-shresth-3a743b171" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200" aria-label="Visit our LinkedIn page">
              <FaLinkedin size={24} alt="Linkedin" />
            </a>
          </div>
          <p className="text-sm">Made with ❤️ by NotifyGenie</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;