// src/components/Testimonial.js
import React from 'react';
import TestCard from './TestCard'; // Import the TestCard component

const Testimonial = () => {
  return (
    <section id="testimonial" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">What Our Clients Say</h2>
        <div className="flex flex-col lg:flex-row justify-center">
          {/* Testimonial Cards */}
          <TestCard
            testimonial='"Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi nullam placerat, lacinia quisque porta aenean habitant."'
            name="ABC"
            title="XYZ"
          />
          <TestCard
            testimonial='"Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi nullam placerat, lacinia quisque porta aenean habitant."'
            name="ABC"
            title="XYZ"
          />
          <TestCard
            testimonial='"Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi nullam placerat, lacinia quisque porta aenean habitant."'
            name="ABC"
            title="XYZ"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
