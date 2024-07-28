import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons
import logo from '../assets/original.png'; // Import your logo image

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center mb-6 lg:mb-0">
          <img src={logo} alt="YourSite Logo" className="w-36 h-auto mr-6" />
          <p className="text-lg">“The best way to predict the future is to create it.”</p>
        </div>
        <div className="text-center mb-6 lg:mb-0">
          <p className="text-lg mb-4">&copy; 2024 NotifyGenie. All rights reserved.</p>
          <div className="mb-6">
            <a href="#about" className="mx-4 hover:underline text-lg">About</a>
            <a href="#services" className="mx-4 hover:underline text-lg">Services</a>
            <a href="#subscribe" className="mx-4 hover:underline text-lg">Subscribe</a>
            <a href="#testimonial" className="mx-4 hover:underline text-lg">Testimonials</a>
            <a href="#contact" className="mx-4 hover:underline text-lg">Contact</a>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-sm">Made with ❤️ by NotifyGenie</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
