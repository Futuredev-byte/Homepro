import React from 'react'
import img1 from '../assets/Image/Rectangle 2.png'
import img2 from '../assets/Image/Rectangle 3.png'
import BlackContainer from '../content/blackContainer'
import TeamContainer from './teamContainer'

const AboutInfo = () => {
  return (
    <div>
    <div className='flex flex-col text-center bg-custom-light lg:w-[90%] lg:ml-14 pb-6'>
        <h1 className='text-3xl mt-8'>Who We Are</h1>
        <p className='lg:text-base text-sm lg:w-[80%] lg:ml-28 w-[80%] ml-8'>We are a dedicated team of real estate professionals committed to helping you find your dream home. With years of experience in the property market, we have built a reputation for delivering exceptional service and personalized guidance to every client. We are here to make your real estate journey smooth and successful.</p>
    </div>

    <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mt-28'>
  
  <img src={img1} alt="" className='h-[401.98px] lg:w-[736px] lg:order-2 lg:mr-10' />
  
  <div className='flex flex-col lg:ml-14 lg:w-[736px] lg:order-1'>
    <h1 className='text-5xl'>Our Story</h1>
    <p className='text-xl lg:w-[95%]'>
      Our journey began with a simple goal: to transform the property buying and selling experience. Founded by a group of passionate real estate experts, our company has grown to become a trusted name in the industry. Over the years, we have expanded our services, embracing new technologies and market trends, while staying true to our core values. Today, we are proud to have helped thousands of families find their perfect home and countless investors make profitable decisions.
    </p>
  </div>
</div>


<div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mt-28'>
  <img src={img2} alt="" className='h-[401.98px] lg:w-[736px] lg:order-1 lg:ml-10' />
  
  <div className='flex flex-col lg:ml-14 lg:w-[736px] lg:order-2'>
    <h1 className='text-5xl'>Our Story</h1>
    <p className='text-xl lg:w-[95%]'>
      Our journey began with a simple goal: to transform the property buying and selling experience. Founded by a group of passionate real estate experts, our company has grown to become a trusted name in the industry. Over the years, we have expanded our services, embracing new technologies and market trends, while staying true to our core values. Today, we are proud to have helped thousands of families find their perfect home and countless investors make profitable decisions.
    </p>
  </div>
</div>

    <BlackContainer/>
    <TeamContainer/>

    </div>
      

  )
}

export default AboutInfo