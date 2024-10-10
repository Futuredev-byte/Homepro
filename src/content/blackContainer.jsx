import React from 'react'

const BlackContainer = () => {
  return (
    <div>
        <div className='flex lg:justify-between lg:items-center lg:flex-row flex-col mr-14 mt-12 w-[100%] '>
        <div className='bg-dark text-white lg:w-[30%] pb-4 rounded-3xl lg:ml-20 px-10 w-[90%] h-[450px] ml-4'>
            <h1 className='text-lg mt-6 ml-8'>Our Values</h1>
            <ul className="my-4 list-decimal pl-6">
      <li className="mb-4">We operate with honesty and transparency in all our dealings.</li>
      <li className="mb-4">Our clients are at the heart of everything we do.</li>
      <li className="mb-4">We are committed to delivering the highest quality service.</li>
      <li className="mb-4">We leverage the latest technology to provide a seamless experience.</li>
      <li className="mb-4">We believe in contributing positively to the communities we serve.</li>
    </ul>
</div>


<div className='bg-dark text-white lg:w-[30%] pb-4 rounded-3xl lg:mr-20 px-10 w-[90%] h-[450px] ml-4 lg:mt-0 mt-4'>
            <h1 className='text-lg mt-6 ml-8'>Why Choose Us?</h1>
            <ul className="my-4 list-decimal pl-6">
      <li className="mb-4">With years of experience in the real estate market, we have the knowledge and skills to guide you through any transaction.</li>
      <li className="mb-4">We have an in-depth understanding of the local property market and can offer insights that others can’t.</li>
      <li className="mb-4">We are skilled negotiators, committed to getting you the best deal possible. From the first consultation to closing the deal, we are with you every step of the way.</li>
    </ul>
</div>
</div>
    </div>
  )
}

export default BlackContainer