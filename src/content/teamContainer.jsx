import React from 'react'
import img1 from '../assets/Image/Frame 138.png'
import img2 from '../assets/Image/Frame 141.png'
import img3 from '../assets/Image/Frame 142.png'

const TeamContainer = () => {
  return (
    <div>
        <div className='flex flex-col relative mt-24 '>
        <h1 className='absolute lg:bottom-[3.5rem] lg:left-[35rem] bottom-40 left-28 font-semibold text-lg'>
        Meet The Team
        </h1>
        <p className='text-center text-base'>Behind our success is a team of experienced, dedicated, and friendly professionals. Each team member brings a wealth of knowledge and a unique perspective to the table, ensuring that we can meet all your real estate needs. Get to know the people who make it all happen.</p>
        </div>
            <div className='flex flex-col lg:justify-between lg:items-center lg:flex-row mt-8'>
                <div className='relative'>
                <h1 className='absolute text-white font-semibold text-lg lg:top-[21rem] lg:left-[8.5rem] top-[20rem] left-[8.5rem]'  >Priscilla John</h1>
                <p className='absolute text-white font-semibold text-lg lg:top-[22.5rem] lg:left-[10.5rem] top-[22rem] left-[10.5rem]' >C.E.O</p>
                <img src={img1} alt="" />
                </div>

                <div className='relative  lg:mt-0 mt-8'>
                <h1 className='absolute text-white font-semibold text-lg w-28 lg:mt-0 mt-48 lg:top-[7.3rem] lg:left-[10rem] top-[7.5rem] left-[8.3rem]' >Gabriel Isaac</h1>
                <p className='absolute text-white font-semibold text-lg lg:top-[9rem] lg:left-[12rem] top-[21rem] left-[10.4rem]' >C.O.O</p>
                </div>
                <img src={img2} alt="" />

                <div className='relative lg:mt-0 mt-8'>
                <h1 className='absolute text-white font-semibold text-lg w-36 lg:top-[7.3rem] lg:left-[10rem] top-[20rem] left-[8rem]' >Gina Konsworth</h1> 
                <p className='absolute text-white font-semibold text-lg w-44 lg:top-[9rem] lg:left-[9rem] top-[21.4rem] left-[7rem]' >Marketing Manager</p>
                </div>
                <img src={img3} alt="" />
            </div>
    </div>
  )
}

export default TeamContainer