import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backvideo from "../assets/backvideo.mp4";
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleSubscribeNow = () => {
    navigate('/login');
  };

  useEffect(() => {
    const crsr = document.querySelector("#cursor");
    const blur = document.querySelector("#cursor-blur");

    if (crsr && blur) {
      const handleMouseMove = (event) => {
        crsr.style.left = `${event.clientX}px`;
        crsr.style.top = `${event.clientY}px`;
        blur.style.left = `${event.clientX - 250}px`;
        blur.style.top = `${event.clientY - 250}px`;
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    } else {
      console.error('Cursor or Cursor Blur element not found');
    }
  }, []);

  return (
    <section id="home" className="hero-section flex items-center justify-center h-screen px-6 lg:px-16 text-black relative">
      <div id="cursor" className="cursor">
      <div id="cursor-blur" className="cursor-blur"></div>
      </div>
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={backvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="main container mx-auto flex flex-col items-center justify-center space-y-8 h-full text-center relative z-10 text-white">
        <div className="page1 textside w-full lg:w-1/2 flex flex-col items-center justify-center space-y-6">
          <h3 className="text-2xl lg:text-3xl italic mb-2 leading-tight">
            Stay Informed with Essential Updates via
          </h3>
          <h1 className="text-7xl font-extrabold mb-4 h1-lifted">NotifyGenie</h1>
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
