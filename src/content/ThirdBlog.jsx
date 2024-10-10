import React from 'react'
import img7 from '../assets/Image/Frame 870 (3).png'
import img8 from '../assets/Image/Frame 87 (4).png'
import img9 from '../assets/Image/Frame 87 (13).png'
import logo1 from '../assets/Icons/CalendarDots.png'
import logo2 from '../assets/Icons/Pen.png'
import logo3 from '../assets/Icons/ArrowBendUpRight.png'


const ThirdBlog = () => {
  return (
    <div>
        <span>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mr-14 lg:mb-4'>
        <div className=' lg:ml-24 ml-16 mt-24 rounded-lg w-[100%]'>
          <img src={img7} alt="" className='h-[12rem]  '/>
          <div className='bg-white w-[83.6%] pb-4 rounded-bl-lg rounded-br-lg'>
          <span className=" flex items-center">
            <div className='flex items-center mt-2 ml-5'>
                <img src={logo1} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-xs ml-1'>Chioma B.</p>
                <img src={logo2} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-xs ml-1'>31/07/2024</p>
              </div>
          </span>
            <p className='text-xs mt-1 ml-5 w-[90%]'><b>Benefits Of Investing in Commercial Real Estate:</b> Learn the advantages of before making your move. </p>
            <div className='flex justify-between items-center'>
            <img src={logo3} alt="" className='mt-5 ml-5'/>
            <p className='mt-5 mr-36 text-color-text text-sm'>Read more</p>
            </div>
          </div>         
          </div>
        <div className=' lg:ml-24 ml-16 mt-24 rounded-lg w-[100%]'>
          <img src={img8} alt="" className='h-[12rem]  '/>
          <div className='bg-white w-[83.6%] pb-4 rounded-bl-lg rounded-br-lg'>
          <span className=" flex items-center">
            <div className='flex items-center mt-1 ml-5'>
                <img src={logo1} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-xs ml-1'>Talatu T.</p>
                <img src={logo2} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-xs ml-1'>30/07/2024</p>
              </div>
          </span>
            <p className='text-xs mt-2 ml-5 w-[90%]'><b>A Beginners Guide to Real Estate Investment:</b> Explore the world of REITs. </p>
            <div className='flex justify-between items-center'>
            <img src={logo3} alt="" className='mt-5 ml-5'/>
            <p className='mt-5 mr-36 text-color-text text-sm'>Read more</p>
            </div>
          </div>         
          </div>
        <div className=' lg:ml-24 ml-16 mt-24 rounded-lg w-[100%]'>
          <img src={img9} alt="" className='h-[12rem]  '/>
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

export default ThirdBlog