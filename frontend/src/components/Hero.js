// src/components/Hero.js
import React from 'react';
import ai from "../assets/ai.jpg"

const Hero = () => {
  return (
    <section id="hero" className="bg-white h-screen flex flex-row justify-between items-center px-6 width:10/12 mx-auto lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* text part */}
        <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0">
          <h1 className="text-4xl font-sans mb-4">Stay Informed with Essential Updates via <span className='font-bold'>'NotifyGenie'</span></h1>
          <p className="text-xl mb-4 font-serif text-gray-500">Receive timely updates on healthcare, weather, and public services directly to your phone.</p>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">Subscribe Now</button>
        </div>
        {/* image part */}
        <div className="hidden lg:block lg:w-1/2 text-right">
          <img src={ai} alt="Info Updates" className="w-30 h-30" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
