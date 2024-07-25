// src/components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ serviceName, serviceDescription }) => {
  return (
    <div className="max-w-md mx-4 mb-6 lg:mb-0 lg:mx-6 p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold mb-4">{serviceName}</h3>
      <p className="text-lg">{serviceDescription}</p>
    </div>
  );
};

export default ServiceCard;
