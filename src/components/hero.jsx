import React from 'react'
import img2 from '../assets/Image/Rectangle 1.png'

const Hero = () => {
  return (
    <div className='bg-custom-light flex justify-between w-[100%] h-[25rem]'>
        <div className='lg:mt-10 mt-20 ml-16'>
            <h1 className='lg:text-[2.5rem] text-[2rem] mt-20 font-semibold'>Find Your Dream 
                <span className='hidden lg:inline'>
                <br/>
                </span> 
                Home Today!</h1>
            <p className='text-[1rem]'>Your journey to a new home starts here. Let's find the perfect place for you.</p>
            <button className='bg-custom-green text-white text-sm border py-3 px-6 rounded-full ml-10'>Browse Properties</button>
        </div>
        
    <div className='lg:w-[75%] lg:mr-20 mr-10 md:relative'>
        <img src= {img2} alt="" className='lg:h-[75%] h-[25%] w-[70%] lg:pl-72 absolute top-16 right-14'/>
    </div>


    </div>
  )
}

export default Hero