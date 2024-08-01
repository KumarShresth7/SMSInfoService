import React from 'react';
import ServiceCard from './ServiceCard';
import horoscope from '../assets/horoscope.svg';
import weather from '../assets/weather.svg';
import news from '../assets/news.svg';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Services</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-8 justify-center">
          <ServiceCard
            serviceName="Horoscope Updates"
            serviceDescription="Stay updated with daily horoscope predictions to plan your day according to the stars."
            imageUrl={horoscope}
          />
          <ServiceCard
            serviceName="Weather Alerts"
            serviceDescription="Stay informed with real-time weather alerts and forecasts to help you plan your day effectively."
            imageUrl={weather}
          />
          <ServiceCard
            serviceName="News Updates"
            serviceDescription="Get the latest news updates, including breaking news, top stories, and in-depth analysis."
            imageUrl={news}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;