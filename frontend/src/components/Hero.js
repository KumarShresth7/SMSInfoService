import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleSubscribeNow = () => {
    navigate('/login');
  };

  useEffect(() => {
    const blur = document.querySelector("#cursor-blur");

    console.log('Cursor Blur:', blur);

    if (blur) {
      const handleMouseMove = (event) => {
        blur.style.left = `${event.clientX - 100}px`;
        blur.style.top = `${event.clientY - 100}px`;
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    } else {
      console.error('Cursor Blur element not found');
    }
  }, []);

  return (
    <section id="home" className="hero-section bg-gradient-to-r from-indigo-400 to-indigo-600 h-screen flex items-center justify-center px-6 lg:px-16 text-black relative">
      <div id="cursor-blur" className="cursor-blur"></div>
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8 h-full text-center">
        <div className="textside w-full lg:w-1/2 flex flex-col items-center justify-center space-y-6">
          <div className="text-2xl lg:text-3xl italic mb-2 leading-tight">
            Stay Informed with Essential Updates via
          </div>
          <h1 className="text-7xl font-extrabold mb-4">NotifyGenie</h1>
          <p className="text-lg lg:text-1xl bold font-light">
            Receive timely updates on healthcare, weather, and public services directly to your phone.
          </p>
          <button
            onClick={handleSubscribeNow}
            className="bg-indigo-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
