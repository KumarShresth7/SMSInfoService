import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as Scroll, scroller } from 'react-scroll';
import logo from '../assets/original.png'; // Adjust the path as necessary

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === '/';

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
  };

  return (
    <nav className="bg-white shadow-md py-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-3" />
          <span className="text-xl font-bold text-indigo-700">NotifyGenie</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <span
            onClick={() => handleNavClick('home')}
            className="text-gray-700 hover:text-indigo-700 cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => handleNavClick('about')}
            className="text-gray-700 hover:text-indigo-700 cursor-pointer"
          >
            About
          </span>
          <span
            onClick={() => handleNavClick('services')}
            className="text-gray-700 hover:text-indigo-700 cursor-pointer"
          >
            Services
          </span>
          <span
            onClick={() => handleNavClick('subscribe')}
            className="text-gray-700 hover:text-indigo-700 cursor-pointer"
          >
            Subscribe
          </span>
          <span
            onClick={() => handleNavClick('testimonial')}
            className="text-gray-700 hover:text-indigo-700 cursor-pointer"
          >
            Testimonials
          </span>
          <span
            onClick={() => handleNavClick('contact')}
            className="text-gray-700 hover:text-indigo-700 cursor-pointer"
          >
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
