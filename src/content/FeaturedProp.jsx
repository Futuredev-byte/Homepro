import React from 'react'
import img1 from '../assets/Image/Frame 161.png'
import img2 from '../assets/Image/Frame 155.png'
import img3 from '../assets/Image/Frame 156.png'
import img4 from '../assets/Image/Frame 161.png'
import img5 from '../assets/Image/Frame 157.png'
import img6 from '../assets/Image/Frame 158 (1).png'
import icon1 from '../assets/Icons/Vector (2).png'

const FeaturedProp = () => {
  return (
    <div className='lg:mt-0'>
        <h1 className='font-semibold text-lg'>Featured Properties</h1>
        <div className='mt-4 flex flex-col '>
            <div className='flex justify-between relative'>
            <img src={img1} alt="" className='' />
            <p className='mt-6 mr-16 font-semibold'>Penthouse at Awka</p>
            <div className='flex justify-between absolute mt-11 mr-16 right-[42px]'>
             <img src={icon1} alt=""  className='w-[12px] h-[11.25px] mt-[7px] mr-[2px]'/>   
            <p className='text-custom-green'>200,000,000</p>
            </div>
            </div>


            <div className='flex justify-between relative mt-6'>
            <img src={img2} alt="" className='' />
            <p className='mt-6 mr-9 font-semibold'>Family duplex at Lagos</p>
            <div className='flex justify-between absolute mt-11 mr-[3.2rem] right-[58px]'>
             <img src={icon1} alt=""  className='w-[12px] h-[11.25px] mt-[7px] mr-[2px]'/>   
            <p className='text-custom-green'>300,000,000</p>
            </div>
            </div>


            <div className='flex justify-between relative mt-6'>
            <img src={img3} alt="" className='' />
            <p className='mt-6 mr-4 font-semibold'>Studio apartment at Abuja</p>
            <div className='flex justify-between absolute mt-11 mr-[3.2rem] right-[61px]'>
             <img src={icon1} alt=""  className='w-[12px] h-[11.25px] mt-[7px] mr-[2px]'/>   
            <p className='text-custom-green'>100,000,000</p>
            </div>
            </div>


            <div className='flex justify-between relative mt-6'>
            <img src={img5} alt="" className='' />
            <p className='mt-6 ml-3 font-semibold'>Comfortable villa at Kaduna</p>
            <div className='flex justify-between absolute mt-11 mr-[3.2rem] right-[57px]'>
             <img src={icon1} alt=""  className='w-[12px] h-[11.25px] mt-[7px] mr-[2px]'/>   
            <p className='text-custom-green'>190,000,000</p>
            </div>
            </div>


            <div className='flex justify-between relative mt-6'>
            <img src={img6} alt="" className='' />
            <p className='mt-6 mr-3 font-semibold'>Bungalow at Port-harcourt</p>
            <div className='flex justify-between absolute mt-11 mr-[3.2rem] right-[57px]'>
             <img src={icon1} alt=""  className='w-[12px] h-[11.25px] mt-[7px] mr-[2px]'/>   
            <p className='text-custom-green'>350,000,000</p>
            </div>
            </div>


            
        </div>
    </div>
  )
}

export default FeaturedProp