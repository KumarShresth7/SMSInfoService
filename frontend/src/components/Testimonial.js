import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './Testimonial.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';
import image4 from '../assets/image4.jpg';

const testimonials = [
  {
    quote: 'NotifyGenie has revolutionized the way we receive updates. It’s efficient and reliable!',
    name: 'Roshan Lal',
    title: 'Daily Wage Worker',
    image: image1,
  },
  {
    quote: 'A must-have service for anyone looking to stay informed about important notifications.',
    name: 'Harjinder Singh',
    title: 'Farmer',
    image: image2,
  },
  {
    quote: 'The seamless integration and user-friendly interface make it a standout product.',
    name: 'XYZ',
    title: 'His Work',
    image: image3,
  },
  {
    quote: 'An exceptional product that delivers on its promises with style and functionality.',
    name: 'ABC',
    title: 'His Work',
    image: image4,
  },
];

const Carousel = ({ testimonials, settings }) => (
  <Slider {...settings}>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="testimonial-card-wrapper">
        <div className="testimonial-card" data-aos="fade-up">
          <div className="testimonial-icon mb-4">
            <FaQuoteLeft className="text-4xl text-indigo-700" />
          </div>
          <p className="text-lg mb-4">{testimonial.quote}</p>
          <div className="flex items-center justify-center mb-4">
            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full border-4 border-indigo-500" />
          </div>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.title}</p>
          <div className="testimonial-icon mt-4">
            <FaQuoteRight className="text-4xl text-indigo-700" />
          </div>
        </div>
      </div>
    ))}
  </Slider>
);

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    rows: 1,
    cssEase: 'linear',
    pauseOnHover: false,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    rows: 1,
    cssEase: 'linear',
    pauseOnHover: false,
  };

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    rows: 1,
    cssEase: 'linear',
    pauseOnHover: false,
    rtl: true,
  };

  const settings4 = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,  // Display one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust speed if necessary
    vertical: false,  // Horizontal scroll for mobile view
    arrows: false,
    rows: 1,
    cssEase: 'linear',
    pauseOnHover: false,
  };

  // Determine the screen size
  const isMobile = window.innerWidth <= 768;

  return (
    <section id="testimonial" className="testimonial-section py-16 bg-gradient-to-r from-indigo-100 to-indigo-200 overflow-hidden">
      <div className="container mx-auto text-center relative">
        <h2 className="text-4xl font-bold mb-8 text-indigo-700">What Our Clients Say</h2>
        <div className="testimonial-slider-container relative overflow-hidden">
          {!isMobile && (
            <>
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <Carousel testimonials={testimonials} settings={settings1} />
              </div>
              <div className="absolute top-0 left-1/3 w-full h-full overflow-hidden">
                <Carousel testimonials={testimonials.slice().reverse()} settings={settings3} />
              </div>
              <div className="absolute top-0 left-2/3 w-full h-full overflow-hidden">
                <Carousel testimonials={testimonials} settings={settings2} />
              </div>
            </>
          )}
          {isMobile && (
            <Carousel testimonials={testimonials} settings={settings4} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
