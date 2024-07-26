import React from 'react';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component
import health from '../assets/health.svg';
import weather from '../assets/weather.svg';
import news from '../assets/news.svg';
import './Services.css'; // Import the CSS file

const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Services</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-8 justify-center">
          {/* Service Cards */}
          <ServiceCard
            serviceName="Healthcare Updates"
            serviceDescription="Receive timely updates on healthcare services, including health advisories, vaccination information, and more."
            imageUrl={health}
          />
          <ServiceCard
            serviceName="Weather Alerts"
            serviceDescription="Stay informed with real-time weather alerts and forecasts to help you plan your day effectively."
            imageUrl={weather}
          />
          <ServiceCard
            serviceName="Public Service Notifications"
            serviceDescription="Get notifications on important public services such as emergency alerts, government announcements, and community events."
            imageUrl={news}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
