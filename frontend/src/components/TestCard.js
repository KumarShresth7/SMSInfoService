import React from 'react';

const TestCard = ({ testimonial, name, title }) => {
  return (
    <div className="test-card" data-aos="fade-up">
      <p className="text-lg mb-4">{testimonial}</p>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
};

export default TestCard;
