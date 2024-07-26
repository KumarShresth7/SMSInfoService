// src/components/Testimonial.js
import React from 'react';
import TestCard from './TestCard'; // Import the TestCard component
import Slider from 'react-slick';
import './Testimonial.css';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '1rem',
    pauseOnHover: true,
  };

  return (
    <section id="testimonial" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">What Our Clients Say</h2>
        <div className="flex flex-col lg:flex-row justify-center">
          <Slider {...settings}>
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
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
