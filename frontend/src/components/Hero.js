// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-200 h-screen flex items-center px-6 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">Stay Informed with Essential Updates via SMS</h1>
          <p className="text-xl mb-4">Receive timely updates on healthcare, weather, and public services directly to your phone.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Subscribe Now</button>
        </div>
        <div className="hidden lg:block lg:w-1/2 text-right">
          <img src="" alt="Info Updates" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
