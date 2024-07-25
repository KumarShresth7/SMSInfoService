// src/components/Services.js
import React from 'react';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="flex flex-col lg:flex-row justify-center">
          {/* Service Cards */}
          <ServiceCard
            serviceName="Healthcare Updates"
            serviceDescription="Receive timely updates on healthcare services, including health advisories, vaccination information, and more."
          />
          <ServiceCard
            serviceName="Weather Alerts"
            serviceDescription="Stay informed with real-time weather alerts and forecasts to help you plan your day effectively."
          />
          <ServiceCard
            serviceName="Public Service Notifications"
            serviceDescription="Get notifications on important public services such as emergency alerts, government announcements, and community events."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
