import React, { useState } from 'react';
import { Link } from 'react-scroll';
import original from "../assets/original.png";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed z-10 top-0 left-0 w-full bg-gradient-to-r from-indigo-500 to-indigo-800 text-white py-4 px-6 lg:px-16 shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center animate-fade-in">
          <img src={original} alt="Logo" className="h-12 mr-4 transition-transform transform hover:scale-110" /> {/* Increased size and hover scale */}
          <h1 className="text-2xl font-bold transition-transform transform hover:scale-110">NotifyGenie</h1> {/* Increased size and hover scale */}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-8">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-lg hover:text-indigo-200 transition-transform transform relative group cursor-pointer"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-lg hover:text-indigo-200 transition-transform transform relative group cursor-pointer"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="text-lg hover:text-indigo-200 transition-transform transform relative group cursor-pointer"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="subscribe"
            smooth={true}
            duration={500}
            className="text-lg hover:text-indigo-200 transition-transform transform relative group cursor-pointer"
          >
            Subscribe
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="testimonial"
            smooth={true}
            duration={500}
            className="text-lg hover:text-indigo-200 transition-transform transform relative group cursor-pointer"
          >
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-lg hover:text-indigo-200 transition-transform transform relative group cursor-pointer"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-lg hover:text-indigo-200 transition-transform transform">
            <svg
              className="w-6 h-6 transition-transform transform hover:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-90 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-20`}>
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-white text-2xl">
            <svg
              className="w-6 h-6 transition-transform transform hover:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center mt-12 space-y-6 animate-slide-in">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl text-white hover:text-indigo-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-xl text-white hover:text-indigo-200"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="text-xl text-white hover:text-indigo-200"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="subscribe"
            smooth={true}
            duration={500}
            className="text-xl text-white hover:text-indigo-200"
            onClick={toggleMenu}
          >
            Subscribe
          </Link>
          <Link
            to="testimonial"
            smooth={true}
            duration={500}
            className="text-xl text-white hover:text-indigo-200"
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-xl text-white hover:text-indigo-200"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
