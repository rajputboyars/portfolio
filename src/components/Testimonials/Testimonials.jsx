"use client"
import React, { useRef, useState } from 'react';
import Slider from '../Others/Slider';

const Testimonials = () => {
  return (
    <>
      <div className='py-10 text-zinc-300'>
        <div className='w-[30%] m-auto font-bold text-6xl flex flex-col gap-3 py-10'>
          <div className='self-start'>
            Hear it
          </div>
          <div className='self-center pr-32'>
            From
          </div>
          <div className='self-end'>
            Our Clients
          </div>
        </div>
        <div>
          <Slider/>
          
        </div>
      </div>
    </>
  );
}
export { Testimonials }