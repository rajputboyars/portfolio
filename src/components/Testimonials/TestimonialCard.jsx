import Image from 'next/image'
import React from 'react'

const TestimonialCard = () => {
  return (
    <div className='grid grid-cols-2 p-3 gap-3 text-left text-white bg-zinc-900 bg-opacity-35 shadow-2xl shadow-white my-20 rounded-lg'>
      <div className='border rounded-lg'>
        <Image src="/images/testmonial1.png" alt='testimonial1' width={200} height={300} className='object-cover'/>
      </div>
      <div className='border rounded-lg p-3 flex flex-col justify-between'>
        <p className='text-base'>I Grew from 0-10k in just 30Days, It was possible only because of the Amazing team at Visualview MediaI Grew from 0-10k in just 30Days, It was possible only because of the Amazin"</p>
        <h2 className=' font-bold text-xl'>- Shweena</h2>
      </div>
    </div>
  )
}

export default TestimonialCard
