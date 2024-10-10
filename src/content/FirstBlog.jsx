import React from 'react'
import img1 from '../assets/Image/Frame 87.png'
import img2 from '../assets/Image/Frame 87 (2).png'
import img3 from '../assets/Image/Frame 87 (3).png'
import logo1 from '../assets/Icons/CalendarDots.png'
import logo2 from '../assets/Icons/Pen.png'
import logo3 from '../assets/Icons/ArrowBendUpRight.png'


const FirstBlog = () => {
  return (
    <div>
        <span>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mr-14'>
        <div className=' lg:ml-24 ml-16 mt-24 rounded-lg w-[100%]'>
          <img src={img1} alt="" className='h-[12rem]  '/>
          <div className='bg-white w-[83.6%] pb-4 rounded-bl-lg rounded-br-lg'>
          <span className=" flex items-center">
            <div className='flex items-center mt-2 ml-5'>
                <img src={logo1} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-xs ml-1'>Samuel O.</p>
                <img src={logo2} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-xs ml-1'>6/08/2024</p>
              </div>
          </span>
            <p className='text-xs mt-1 ml-5 w-[90%]'><b>Top Tips for First-Time Homebuyers:</b> Learn the essentials for a smooth homebuying experience </p>
            <div className='flex justify-between items-center'>
            <img src={logo3} alt="" className='mt-5 ml-5'/>
            <p className='mt-5 mr-36 text-color-text text-sm'>Read more</p>
            </div>
          </div>         
          </div>
        <div className=' lg:ml-24 ml-16 mt-24 rounded-lg w-[100%]'>
          <img src={img2} alt="" className='h-[12rem]  '/>
          <div className='bg-white w-[83.6%] pb-4 rounded-bl-lg rounded-br-lg'>
          <span className=" flex items-center">
            <div className='flex items-center mt-1 ml-5'>
                <img src={logo1} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-xs ml-1'>Omoyeni A.</p>
                <img src={logo2} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-xs ml-1'>5/08/2024</p>
              </div>
          </span>
            <p className='text-xs mt-2 ml-5 w-[90%]'><b>How to choose the right neighborhood:</b> Find out what to look for in a neighborhood. </p>
            <div className='flex justify-between items-center'>
            <img src={logo3} alt="" className='mt-5 ml-5'/>
            <p className='mt-5 mr-36 text-color-text text-sm'>Read more</p>
            </div>
          </div>         
          </div>
        <div className=' lg:ml-24 ml-16 mt-24 rounded-lg w-[100%]'>
          <img src={img3} alt="" className='h-[12rem]  '/>
          <div className='bg-white w-[83.6%] pb-4 rounded-bl-lg rounded-br-lg'>
          <span className=" flex items-center">
            <div className='flex items-center mt-2 ml-5'>
                <img src={logo1} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-xs ml-1'>Wilson J.</p>
                <img src={logo2} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-xs ml-1'>4/08/2024</p>
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

export default FirstBlog