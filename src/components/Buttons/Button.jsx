"use client"
import React from 'react';

const Button = ({ children, variant = 'primary', onClick }) => {
  const baseClasses = 'px-4 py-2 rounded-md font-semibold focus:outline-none transition duration-300';
  
  const variantClasses = 
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : variant === 'secondary'
      ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'; // outline variant

  const buttonClasses = `${baseClasses} ${variantClasses}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button}
