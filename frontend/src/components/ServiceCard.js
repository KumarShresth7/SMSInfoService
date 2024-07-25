import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ serviceName, serviceDescription }) => {
  return (
    <div className="service-card relative max-w-md mx-4 mb-6 lg:mb-0 lg:mx-6 p-6 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative w-full min-h-[10rem] z-10">
        <h3 className="text-xl font-bold mb-4">{serviceName}</h3>
        <p className="text-lg">{serviceDescription}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
