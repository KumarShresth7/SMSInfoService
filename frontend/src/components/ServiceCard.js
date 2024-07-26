import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ serviceName, serviceDescription, imageUrl }) => {
  return (
    <div className="service-card relative max-w-md mx-4 mb-6 lg:mb-0 lg:mx-6 p-6 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105  group">
      <div className="relative w-full min-h-[10rem] z-10">
        <h3 className="text-xl font-bold mb-4  group-hover:font-extrabold">{serviceName}</h3>
        <p className="text-lg group-hover:text-white">{serviceDescription}</p>
      </div>
      <img
        src={imageUrl}
        alt="Top right icon"
        className="absolute top-4 right-4 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </div>
  );
};

export default ServiceCard;
