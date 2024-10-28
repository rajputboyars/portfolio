// components/About.js
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-white py-16 px-8 grid grid-cols-2 items-center justify-between">
      {/* Left Side: Text Content */}
      <div className="max-w-lg mb-8 lg:mb-0">
        <div className="text-4xl lg:text-5xl font-bold leading-tight">
          <p>
            Helping the
          </p>
          <p className="text-red-500">
            world's greatest
          </p>
          <p className="text-yellow-400">
          creators create.
          </p>
        </div>
        <p className="mt-4 text-gray-300">
          Taking content creation to the next level with our post production and
          growth strategy services.
        </p>
        <button className="bg-orange-400 border-4 text-xl mt-8 py-3 px-6 font-bold text-white rounded-lg hover:bg-orange-500 transition-all w-fit">
          Get Started →
        </button>
      </div>

      {/* Right Side: Image Collage */}
      <div className="flex justify-center items-center">
        {/* Images */}
        <div className="flex space-x-4 relative">
          <Image
            src="/images/testmonial1.png"
            alt="Person 3"
            width={350}
            height={150}
            className="rounded-full border-4 border-black z-30"
          />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export { About };
