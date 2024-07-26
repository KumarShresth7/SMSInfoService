import React, { useEffect } from 'react';
import './Subscribe.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  {
    title: "Step 1: Sign Up",
    description: "Create an account by providing your basic information and preferences.",
    icon: "📋"
  },
  {
    title: "Step 2: Verify Email",
    description: "Check your email for a verification link and confirm your registration.",
    icon: "📧"
  },
  {
    title: "Step 3: Customize Preferences",
    description: "Set your preferences for the types of updates you want to receive.",
    icon: "⚙️"
  },
  {
    title: "Step 4: Get Updates",
    description: "Start receiving timely updates and notifications based on your preferences.",
    icon: "📲"
  }
];

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset value to trigger animations
      easing: 'ease-in-out', // Easing function for animations
      once: true // Animation should happen only once while scrolling down
    });
  }, []);

  return (
    <section id="subscribe" className="py-16 bg-gradient-to-r from-indigo-100 to-indigo-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-700">How to Subscribe</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="subscribe-card transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="800"
            >
              <div className="text-6xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-indigo-700">{step.title}</h3>
              <p className="text-lg text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
