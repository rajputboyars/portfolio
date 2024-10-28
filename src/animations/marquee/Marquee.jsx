// components/Marquee.js
import TestimonialCard from '@/components/Testimonials/TestimonialCard';
import React from 'react';

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="flex space-x-4"
        style={{
          animation: 'marquee 20s linear infinite',
          display: 'flex',
        }}
      >
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
        
        {/* Repeat cards for the continuous effect */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="inline-block w-64 p-4 bg-white shadow-md rounded-md"
          >
           <TestimonialCard/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
