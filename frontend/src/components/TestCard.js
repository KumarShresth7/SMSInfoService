// src/components/TestCard.js
import React from 'react';

const TestCard = ({ testimonial, name, title }) => {
  return (
    <div className="max-w-md mx-4 mb-6 lg:mb-0 lg:mx-6 p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition">
      <p className="text-lg mb-4">{testimonial}</p>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
};

export default TestCard;
