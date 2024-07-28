import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Subscribe from '../components/Subscribe';
import CombinedDivider from '../components/CombinedDivider';
import Testimonials from '../components/Testimonial';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Subscribe />
      <CombinedDivider/>
      <Testimonials />
      <CombinedDivider/>
      <Contact />
    </div>
  );
};

export default Home;
