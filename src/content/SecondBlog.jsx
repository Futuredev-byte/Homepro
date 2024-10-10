import React from 'react'
import img4 from '../assets/Image/Frame 870.png'
import img5 from '../assets/Image/Frame 87 (1).png'
import img6 from '../assets/Image/Frame 870 (2).png'
import logo1 from '../assets/Icons/CalendarDots.png'
import logo2 from '../assets/Icons/Pen.png'
import logo3 from '../assets/Icons/ArrowBendUpRight.png'


const SecondBlog = () => {
  return (
    <div>
        <span>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mr-14 lg:mb-4'>
        <div className=' lg:ml-24 ml-16 mt-24 rounded-lg w-[100%]'>
          <img src={img4} alt="" className='h-[12rem]  '/>
          <div className='bg-white w-[83.6%] pb-4 rounded-bl-lg rounded-br-lg'>
          <span className=" flex items-center">
            <div className='flex items-center mt-2 ml-5'>
                <img src={logo1} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-xs ml-1'>Daniel Y.</p>
                <img src={logo2} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-xs ml-1'>3/08/2024</p>
              </div>
          </span>
            <p className='text-xs mt-1 ml-5 w-[90%]'><b>Understanding the Real Estate Market:</b> Getting the latest insights on investment opportunities</p>
            <div className='flex justify-between items-center'>
            <img src={logo3} alt="" className='mt-5 ml-5'/>
            <p className='mt-5 mr-36 text-color-text text-sm'>Read more</p>
            </div>
          </div>         
          </div>
        <div className=' lg:ml-24 ml-16 mt-24 rounded-lg w-[100%]'>
          <img src={img5} alt="" className='h-[12rem]  '/>
          <div className='bg-white w-[83.6%] pb-4 rounded-bl-lg rounded-br-lg'>
          <span className=" flex items-center">
            <div className='flex items-center mt-1 ml-5'>
                <img src={logo1} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-xs ml-1'>Adedayo A.</p>
                <img src={logo2} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-xs ml-1'>2/08/2024</p>
              </div>
          </span>
            <p className='text-xs mt-2 ml-5 w-[90%]'><b>How To Maximize Your Property's Value Before Selling:</b> Discover how to boost your property's market value. </p>
            <div className='flex justify-between items-center'>
            <img src={logo3} alt="" className='mt-5 ml-5'/>
            <p className='mt-5 mr-36 text-color-text text-sm'>Read more</p>
            </div>
          </div>         
          </div>
        <div className=' lg:ml-24 ml-16 mt-24 rounded-lg w-[100%]'>
          <img src={img6} alt="" className='h-[12rem]  '/>
          <div className='bg-white w-[83.6%] pb-4 rounded-bl-lg rounded-br-lg'>
          <span className=" flex items-center">
            <div className='flex items-center mt-2 ml-5'>
                <img src={logo1} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-xs ml-1'>Ebenezer A.</p>
                <img src={logo2} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-xs ml-1'>1/08/2024</p>
              </div>
          </span>
            <p className='text-xs mt-1 ml-5 w-[90%]'><b>Understanding the Mortgage process:</b> A step-by-step guide to getting a mortgage. </p>
            <div className='flex justify-between items-center'>
            <img src={logo3} alt="" className='mt-5 ml-5'/>
            <p className='mt-5 mr-36 text-color-text text-sm'>Read more</p>
            </div>
          </div>         
          </div>
        </div> 
        </span>
    </div>
  )
}

export default SecondBlog