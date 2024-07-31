import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { scroller } from 'react-scroll';
import teamPhoto from '../assets/team.jpg'; // Make sure to replace with the actual path to your team photo
import './About.css'; // Add this for custom styles
import shresth from '../assets/shresth.png';
import rachit from '../assets/rachit.png';
import ananya from '../assets/ananya.jpeg';
import vedant from '../assets/vedant.jpeg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
      once: false
    });
  }, []);

  const handleContactUsClick = () => {
    scroller.scrollTo('contact', {
      duration: 1500, // Adjust duration for smoother scrolling
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <section id="about" className="py-16 bg-gray-50 bg-about-pattern diagonal-stripes">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">About Us</h2>

        {/* Company Overview */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At NotifyGenie, we are dedicated to keeping you informed with the latest and most relevant updates in healthcare, weather, and public services. Our journey began with a vision to create a reliable source of information that empowers individuals and communities.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <img src={teamPhoto} alt="Our Team" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to provide timely, accurate, and actionable updates that help our users stay informed and make better decisions. We strive to deliver information that is essential, trustworthy, and easy to access.
          </p>
        </div>

        {/* Team Introduction */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Meet Our Team</h3>
          <div className="flex flex-wrap justify-center">
            {/* Team Member */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white p-6 rounded-lg shadow-lg team-member">
                <img src={shresth} alt="Shresth" className="w-24 h-24 mx-auto rounded-full mb-4" />
                <h4 className="text-xl font-semibold text-indigo-700">Shresth</h4>
                <p className="text-gray-600">3rd Year COE student at TIET</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white p-6 rounded-lg shadow-lg team-member">
                <img src={ananya} alt="Ananya" className="w-24 h-24 mx-auto rounded-full mb-4" />
                <h4 className="text-xl font-semibold text-indigo-700">Ananya</h4>
                <p className="text-gray-600">3rd Year COE student at TIET</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white p-6 rounded-lg shadow-lg team-member">
                <img src={rachit} alt="Rachit" className="w-24 h-24 mx-auto rounded-full mb-4" />
                <h4 className="text-xl font-semibold text-indigo-700">Rachit</h4>
                <p className="text-gray-600">3rd Year COE student at TIET</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white p-6 rounded-lg shadow-lg team-member">
                <img src={vedant} alt="Vedant" className="w-24 h-24 mx-auto rounded-full mb-4" />
                <h4 className="text-xl font-semibold text-indigo-700">Vedant</h4>
                <p className="text-gray-600">3rd Year COE student at TIET</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Join Us</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Interested in joining our team or learning more about what we do? Reach out to us and let's make a difference together!
          </p>
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
            onClick={handleContactUsClick}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
