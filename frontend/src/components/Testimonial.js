import React, { useEffect } from 'react';
import TestCard from './TestCard'; // Import the TestCard component
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Testimonial.css';

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',  // No extra padding for centering
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '10px',  // Adjust padding for responsiveness
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px',  // Adjust padding for smaller screens
        },
      },
    ],
  };

  return (
    <section id="testimonial" className="py-16 bg-gradient-to-r from-indigo-100 to-indigo-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-indigo-700">What Our Clients Say</h2>
        <div className="flex flex-col lg:flex-row justify-center">
          <Slider {...settings}>
            {/* Testimonial Cards */}
            <div data-aos="fade-up">
              <TestCard
                testimonial='"Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi nullam placerat, lacinia quisque porta aenean habitant."'
                name="ABC"
                title="XYZ"
              />
            </div>
            <div data-aos="fade-up">
              <TestCard
                testimonial='"Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi nullam placerat, lacinia quisque porta aenean habitant."'
                name="ABC"
                title="XYZ"
              />
            </div>
            <div data-aos="fade-up">
              <TestCard
                testimonial='"Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi nullam placerat, lacinia quisque porta aenean habitant."'
                name="ABC"
                title="XYZ"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
