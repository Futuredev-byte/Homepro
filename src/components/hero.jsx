import React from 'react'
import img2 from '../assets/Image/Rectangle 1.png'

const Hero = () => {
  return (
    <div className='bg-custom-light flex flex-col lg:flex-row lg:justify-between  w-[100%] h-[610px]'>
        <div className='lg:mt-[9rem] mt-6 lg:ml-16 order-2 lg:order-1'>
            <h1 className='lg:text-[2.5rem] text-[2rem] text-center lg:text-start h-[96px] w-[402px] font-semibold lg:ml-0 ml-8'>Find Your Dream Home Today!</h1>
            <p className='text-[1rem] text-center lg:text-start h-[68px] lg:w-[521px] lg:mt-8 '>Your journey to a new home starts here. Let's find the perfect place for you.</p>
            <button className='bg-custom-green text-white text-sm border lg:ml-0 ml-[9.2rem] py-3 px-6 rounded-[25px] '>Browse Properties</button>
        </div>
        
    <div className='lg:mr-14 lg:mt-[9rem] order-1 lg:order-2'>
        <img src={img2} alt="" className='lg:w-[639px] lg:h-[402px]'/>
    </div>
    </div>
    
  )
}

export default Hero