import React from 'react'
import Image from 'next/image'

const ServicesCard = () => {
  return (
    <div className='flex flex-col items-center text-white'>
    <Image
      src={"/images/testmonial1.png"}
      alt='image'
      width={400}
      height={100}
      className='object-contain rounded-lg overflow-hidden'
    />
    <h2>Short Form Video Editing</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi similique reiciendis obcaecati esse debitis repellendus praesentium aut laborum? Odio.</p>
  </div>
  )
}

export default ServicesCard
