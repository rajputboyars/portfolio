import React from 'react'
import Slider from '../Others/Slider'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div>
      <div className='flex flex-col items-center text-6xl mb-10 text-white font-bold'>
        <div className='pr-32'>OUR</div>
        <div className='pl-32'>Services</div>
      </div>
      <div className='grid grid-cols-4 gap-8'>
       <ServicesCard/>
       <ServicesCard/>
       <ServicesCard/>
       <ServicesCard/>
      </div>
    </div>
  )
}

export { Services}
