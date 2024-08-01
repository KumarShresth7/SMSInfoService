import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import original from "../assets/original.png";
import './Navbar.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    if (isLandingPage) {
      // GSAP animation for background color change on scroll
      const animation = gsap.to(".navbar", {
        background: "linear-gradient(to right, #4f46e5, #312e81)",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".navbar",
          start: "top -15%",
          end: "top -16%",
          scrub: 1,
          markers: false,
          toggleActions: "play none none reverse",
        },
      });

      // Cleanup function to remove GSAP animation
      return () => {
        animation.scrollTrigger.kill();
        animation.kill();
      };
    }
  }, [isLandingPage]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (section) => {
    if (!isLandingPage) {
      navigate('/', { state: { scrollTo: section } });
    } else {
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar fixed w-full text-white py-4 px-6 lg:px-16 shadow-lg transition-shadow duration-300 ease-in-out ${isLandingPage ? 'bg-transparent' : 'bg-gradient-to-r from-indigo-600 to-indigo-900'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center animate-fade-in">
          <img src={original} alt="Logo" className="h-12 mr-4 transition-transform transform hover:scale-110" />
          <h1 className="text-3xl transition-transform transform hover:scale-110">
            <span className="text-notify">Notify</span><span className="text-genie">Genie</span>
          </h1>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex space-x-6">
          <span
            onClick={() => handleNavClick('home')}
            className="text-lg hover:text-indigo-200 transition-transform transform relative group cursor-pointer"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all group-hover:w-full"></span>
          </span>
          <span
            onClick={() => handleNavClick('about')}
            className="text-lg hover:text-indigo-200 transition-transform transform relative group cursor-pointer"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all group-hover:w-full"></span>
          </span>
          <span
            onClick={() => handleNavClick('services')}
            className="text-lg hover:text-indigo-200 transition-transform transform relative group cursor-pointer"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all group-hover:w-full"></span>
          </span>
          <span
            onClick={() => handleNavClick('subscribe')}
            className="text-lg hover:text-indigo-200 transition-transform transform relative group cursor-pointer"
          >
            Subscribe
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all group-hover:w-full"></span>
          </span>
          <span
            onClick={() => handleNavClick('testimonial')}
            className="text-lg hover:text-indigo-200 transition-transform transform relative group cursor-pointer"
          >
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all group-hover:w-full"></span>
          </span>
          <span
            onClick={() => handleNavClick('contact')}
            className="text-lg hover:text-indigo-200 transition-transform transform relative group cursor-pointer"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all group-hover:w-full"></span>
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
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

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-90 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-20`}>
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
          <span
            onClick={() => handleNavClick('home')}
            className="text-xl text-white hover:text-indigo-200"
          >
            Home
          </span>
          <span
            onClick={() => handleNavClick('about')}
            className="text-xl text-white hover:text-indigo-200"
          >
            About
          </span>
          <span
            onClick={() => handleNavClick('services')}
            className="text-xl text-white hover:text-indigo-200"
          >
            Services
          </span>
          <span
            onClick={() => handleNavClick('subscribe')}
            className="text-xl text-white hover:text-indigo-200"
          >
            Subscribe
          </span>
          <span
            onClick={() => handleNavClick('testimonial')}
            className="text-xl text-white hover:text-indigo-200"
          >
            Testimonials
          </span>
          <span
            onClick={() => handleNavClick('contact')}
            className="text-xl text-white hover:text-indigo-200"
          >
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
