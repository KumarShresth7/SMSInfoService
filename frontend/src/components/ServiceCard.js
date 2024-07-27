import React from 'react';
import { useInView } from 'react-intersection-observer';
import './ServiceCard.css';

const ServiceCard = ({ serviceName, serviceDescription, imageUrl }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false, // Remove triggerOnce to allow multiple triggers
  });

  return (
    <div
      ref={ref}
      className={`service-card relative max-w-md mx-4 mb-6 lg:mb-0 lg:mx-6 p-6 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
    >
      <div className="relative w-full min-h-[10rem] z-10">
        <h3 className="text-xl font-bold mb-4 group-hover:text-white group-hover:font-extrabold">{serviceName}</h3>
        <p className="text-lg group-hover:text-white">{serviceDescription}</p>
      </div>
      <img
        src={imageUrl}
        alt={`${serviceName} icon`}
        className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </div>
  );
};

export default ServiceCard;
