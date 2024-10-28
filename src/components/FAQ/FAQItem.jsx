"use client"
import React, { useRef, useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={toggleAccordion}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="text-lg font-medium">{question}</span>
        <div
          className={`text-xl font-bold transform transition-transform duration-700 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          +
        </div>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <p className="mt-2 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
