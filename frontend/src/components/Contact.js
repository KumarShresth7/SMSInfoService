import React, { useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-indigo-100 to-indigo-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-700">Contact Us</h2>
        <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-16">
          <div data-aos="fade-right" className="contact-details mb-12 lg:mb-0">
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-indigo-700 text-2xl mr-4" />
              <p className="text-lg text-gray-700">
                P.O. Box 32, Bhadson Road, Patiala, Punjab, Pin -147004, India
                <span className="address-line">(Thapar Institute of Engineering and Technology)</span>
              </p>
            </div>
            <div className="flex items-center mb-6">
              <FaPhone className="text-indigo-700 text-2xl mr-4" />
              <p className="text-lg text-gray-700">+91 62837 60168</p>
            </div>
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-indigo-700 text-2xl mr-4" />
              <p className="text-lg text-gray-700">contact@notifygenie.com</p>
            </div>
          </div>
          <div data-aos="fade-left" className="contact-form w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
