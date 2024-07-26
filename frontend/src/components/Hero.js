import React from 'react';
import ai from "../assets/ai.jpg";

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-screen relative flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Text Part */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Stay Informed with Essential Updates via <span className='font-extrabold'>'NotifyGenie'</span>
          </h1>
          <p className="text-lg lg:text-xl font-light">
            Receive timely updates on healthcare, weather, and public services directly to your phone.
          </p>
          <button className="bg-indigo-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105">
            Subscribe Now
          </button>
        </div>
        {/* Image Part */}
        <div className="hidden lg:block lg:w-1/2 lg:text-right">
          <img src={ai} alt="Info Updates" className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
