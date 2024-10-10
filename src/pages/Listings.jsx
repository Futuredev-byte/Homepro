import React from 'react'
import logo1 from '../assets/Icons/Line 3.png'
import GridListings from '../content/gridListingsleft'
import img1 from '../assets/Icons/Frame 175.png'
import img2 from '../assets/Icons/Frame 172.png'
import img3 from '../assets/Icons/Frame 173.png'
import img4 from '../assets/Icons/Frame 174.png'
import img5 from '../assets/Icons/Frame 176.png'
import img6 from '../assets/Icons/Frame 177.png'
import Footer from '../components/footer'


const Listings = ({
     title = "Find the Best Properties",
    subtitle = "Discover a wide range of exclusive properties tailored to your unique preferences."
}) => {
  return (
    <div className='bg-pale-green'>
    <div className='bg-custom-green bg-center w-full lg:mt-32 h-[291px] flex justify-between items-center'
    style={{backgroundImage: `url(${logo1})`}}>

<div className="w-full h-full flex flex-col justify-center items-center bg-transparent">
        <div className="text-center text-white mx-auto bg-transparent">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-foreground bg-transparent">
            {title}
          </h1>
          <p className="text-lg text-secondary-foreground font-semibold bg-transparent pt-4 md:mt-0">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
        <GridListings/>
        <span className='flex justify-start items-center mt-10 lg:ml-[33rem] ml-20'>
            <button className='h-[21px] w-[21px] mx-2'><img src={img1} alt=""  /></button>
            <button className='h-[21px] w-[21px] mx-2'><img src={img2} alt="" /></button>
            <button className='h-[21px] w-[21px] mx-2'><img src={img3} alt="" /></button>
            <button className='h-[21px] w-[21px] mx-2'><img src={img4} alt="" /></button>
            <button className='h-[21px] w-[21px] mx-2'><img src={img5} alt="" /></button>
            <button className='h-[21px] w-[21px] mx-2'><img src={img6} alt="" /></button>
        </span>
        <div className='mt-8'>
        <Footer/>
        </div>
    </div>
  )
}

export default Listings