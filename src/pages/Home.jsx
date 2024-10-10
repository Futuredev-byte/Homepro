import React from 'react'
import Hero from '../components/hero'
import Footer from '../components/footer'
import img3 from '../assets/Image/Frame 371.png'
import img4 from '../assets/Image/Frame 37.png'
import img5 from '../assets/Image/Frame 370 (6).png'
import img6 from '../assets/Image/Frame 370 (7).png'
import img7 from '../assets/Image/Frame 370 (8).png'
import img8 from '../assets/Image/Frame 370 (9).png'
import img9 from '../assets/Image/Frame 370 (10).png'
import img10 from '../assets/Image/Frame 370 (5).png'
import img11 from '../assets/Image/Ellipse 1.png'
import img12 from '../assets/Image/Ellipse 3.png'
import img13 from '../assets/Image/Frame 37 (2).png'
import img14 from '../assets/Image/Ellipse 2.png'
import img15 from '../assets/Image/Ellipse 1 (1).png'
import img16 from '../assets/Image/Frame 87.png'
import img17 from '../assets/Image/Frame 87 (2).png'
import img18 from '../assets/Image/Frame 87 (3).png'
import img19 from '../assets/Image/Ellipse 4.png'
import img20 from '../assets/Image/Ellipse 4 (1).png'
import img21 from '../assets/Image/Ellipse 4 (2).png'
import img22 from '../assets/Image/Vector (1).png'
import log1 from '../assets/Icons/CurrencyNgn.png'
import log2 from '../assets/Icons/Heart.png'
import log3 from '../assets/Icons/Bed.png'
import log4 from '../assets/Icons/Bathtub.png'
import log5 from '../assets/Icons/tdesign_measurement-2.png'
import log6 from '../assets/Icons/Frame 71.png'
import log7 from '../assets/Icons/Frame 71 (4).png'
import log8 from '../assets/Icons/Frame 71 (2).png'
import log9 from '../assets/Icons/Frame 71 (3).png'
import log10 from '../assets/Icons/Pen.png'
import log11 from '../assets/Icons/CalendarDots.png'
import log12 from '../assets/Icons/ArrowBendUpRight.png'


export const Home = () => {
  return (
    <div>
        <Hero/>
        <div className='bg-pale-green relative'>
          <h1 className='font-bold lg:text-2xl absolute lg:left-28 lg:top-12 left-20 top-11 text-3xl'>Featured Properties</h1>   
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mr-14 '>
          <div className='bg-white p-5 rounded-lg ml-24 mt-24'>
          <img src={img3} alt="" className='h-[12rem]  '/>
          <span className="flex items-center">
            <img src={log1} alt=""/>
              <p className='font-semibold text-2xl'>350,000,000</p>
              <img src={log2} alt="" className='lg:ml-20 ml-6 h-[1rem]'/>
          </span>
            <p className='font-semibold text-base mt-1'>Luxury Villa in Banana Island</p>
              <div className='flex items-center mt-1'>
                <img src={log3} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-sm ml-1'>4 bed</p>
                <img src={log4} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>5 Bath</p>
                <img src={log5} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>5000 sq ft</p>
              </div>
          </div>
          <div className='bg-white p-5 rounded-lg ml-20 mt-24'>
          <img src={img4} alt="" className='h-[12rem]  '/>
          <span className="flex items-center">
            <img src={log1} alt=""/>
              <p className='font-semibold text-2xl'>450,000,000</p>
              <img src={log2} alt="" className='lg:ml-20 ml-10 h-[1rem]'/>
          </span>
            <p className='font-semibold text-base mt-1'>Modern Duplex in Lekki phase 2</p>
              <div className='flex items-center mt-1'>
                <img src={log3} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-sm ml-1'>6 bed</p>
                <img src={log4} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>7 Bath</p>
                <img src={log5} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>3000 sq ft</p>
              </div>
          </div>
          <div className='bg-white p-5 rounded-lg ml-20 mt-24 mr-9'>
          <img src={img13} alt="" className='h-[12rem]  '/>
          <span className="flex items-center">
            <img src={log1} alt=""/>
              <p className='font-semibold text-2xl'>90,000,000</p>
              <img src={log2} alt="" className='lg:ml-24 ml-5 h-[1rem]'/>
          </span>
            <p className='font-semibold text-base mt-1'>Bungalow in Maitama</p>
              <div className='flex items-center mt-1'>
                <img src={log3} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-sm ml-1'>3 bed</p>
                <img src={log4} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>3 Bath</p>
                <img src={log5} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>4000 sq ft</p>
              </div>
          </div>
        
        </div>
        <div className='relative'>
        <h1 className='font-bold lg:text-2xl text-3xl absolute top-10 lg:left-28 left-32'>How It Works</h1>
        <div className='flex flex-col lg:flex-row lg:justify-between Llg:items-center mr-20'>
          <div>
          <img src={log6} alt="" className='mt-24 lg:ml-[12rem] ml-[10.5rem]'/>
         <div className='flex flex-col items-center lg:pt-0 pt-3'>
         <p className='lg:ml-[6rem] ml-16  font-semibold'>Search properties</p>
         <p className='lg:ml-28 ml-20 text-xs text-center'>Use our search tool to find properties that match your criteria.</p>
         </div>
          </div>
          <div>
          <img src={log7} alt="" className='mt-24 lg:ml-[6.8rem] ml-[10.5rem]'/>
         <div className='flex flex-col items-center lg:pt-0 pt-3'>
         <p className='lg:mr-5 ml-16 font-semibold'>Schedule a visit</p>
         <p className='lg:ml-14 ml-16 text-xs text-center'>Arrange a visit to see the properties in person.</p>
         </div>
          </div>
          <div>
          <img src={log8} alt="" className='mt-24 lg:ml-28 ml-[10.5rem]'/>
         <div className='flex flex-col items-center lg:pt-0 pt-3'>
         <p className='lg:mr-2 ml-16 font-semibold'>Make an offer</p>
         <p className='ml-16 text-xs text-center'>Submit an offer and negotiate the best deal.</p>
         </div>
          </div>
          <div>
          <img src={log9} alt="" className='mt-24 lg:ml-[11rem] ml-[10.5rem]'/>
         <div className='flex flex-col items-center lg:pt-0 pt-3'>
         <p className='lg:ml-[6.2rem] ml-14 font-semibold'>Close the deal</p>
         <p className='lg:ml-28 ml-16 text-center text-xs'>Complete the paperwork and move into your new home.</p>
         </div>
          </div>
         
         
        </div>
        </div>
        <div className='bg-pale-green relative'>
        <h1 className='font-bold lg:text-2xl text-3xl absolute top-10 lg:left-28 left-24'>Our Listings</h1>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mr-14'>
        <div className='bg-white p-5 rounded-lg lg:ml-24 ml-10 mt-24'>
          <img src={img5} alt="" className='h-[12rem]  '/>
          <span className="flex items-center">
            <img src={log1} alt=""/>
              <p className='font-semibold text-2xl'>250,000,000</p>
              <img src={log2} alt="" className='lg:ml-20 ml-20 h-[1rem]'/>
          </span>
            <p className='font-semibold text-base mt-1'>Luxury Villa in Aba</p>
              <div className='flex items-center mt-1'>
                <img src={log3} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-sm ml-1'>4 bed</p>
                <img src={log4} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>5 Bath</p>
                <img src={log5} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>5000 sq ft</p>
              </div>
          </div>
        <div className='bg-white p-5 rounded-lg lg:ml-24 ml-10 lg:mt-24 mt-10'>
          <img src={img6} alt="" className='h-[12rem]  '/>
          <span className="flex items-center">
            <img src={log1} alt=""/>
              <p className='font-semibold text-2xl'>400,000,000</p>
              <img src={log2} alt="" className='ml-20 h-[1rem]'/>
          </span>
            <p className='font-semibold text-base mt-1'>Duplex in Jabi</p>
              <div className='flex items-center mt-1'>
                <img src={log3} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-sm ml-1'>6 bed</p>
                <img src={log4} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>7 Bath</p>
                <img src={log5} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>3000 sq ft</p>
              </div>
          </div>
        <div className='bg-white p-5 rounded-lg lg:ml-24 ml-10 lg:mt-24 mt-10'>
          <img src={img7} alt="" className='h-[12rem]  '/>
          <span className="flex items-center">
            <img src={log1} alt=""/>
              <p className='font-semibold text-2xl'>20,000,000</p>
              <img src={log2} alt="" className='ml-24 h-[1rem]'/>
          </span>
            <p className='font-semibold text-base mt-1'>Bungalow in Kano</p>
              <div className='flex items-center mt-1'>
                <img src={log3} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-sm ml-1'>3 bed</p>
                <img src={log4} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>3 Bath</p>
                <img src={log5} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>4000 sq ft</p>
              </div>
          </div>
        </div> 
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mr-14 lg:pt-0 pt-8'>
        <div className='bg-white p-5 rounded-lg lg:ml-24  ml-10'>
          <img src={img8} alt="" className='h-[12rem]  '/>
          <span className="flex items-center">
            <img src={log1} alt=""/>
              <p className='font-semibold text-2xl'>455,000,000</p>
              <img src={log2} alt="" className='ml-20 h-[1rem]'/>
          </span>
            <p className='font-semibold text-base mt-1'>Mansion in Asokoro</p>
              <div className='flex items-center mt-1'>
                <img src={log3} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-sm ml-1'>6 bed</p>
                <img src={log4} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>7 Bath</p>
                <img src={log5} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>7500 sq ft</p>
              </div>
          </div>
        <div className='bg-white p-5 rounded-lg lg:ml-24 ml-10 lg:mt-0 mt-10'>
          <img src={img9} alt="" className='h-[12rem]  '/>
          <span className="flex items-center">
            <img src={log1} alt=""/>
              <p className='font-semibold text-2xl'>650,000,000</p>
              <img src={log2} alt="" className='ml-20 h-[1rem]'/>
          </span>
            <p className='font-semibold text-base mt-1'>Hotel in Port-Harcourt City</p>
              <div className='flex items-center mt-1'>
                <img src={log3} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-sm ml-1'>50 bed</p>
                <img src={log4} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>55 Bath</p>
                <img src={log5} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>20000 sq ft</p>
              </div>
          </div>
        <div className='bg-white p-5 rounded-lg lg:ml-24 ml-10 lg:mt-0 mt-10'>
          <img src={img10} alt="" className='h-[12rem]  '/>
          <span className="flex items-center">
            <img src={log1} alt=""/>
              <p className='font-semibold text-2xl'>305,000,000</p>
              <img src={log2} alt="" className='ml-20 h-[1rem]'/>
          </span>
            <p className='font-semibold text-base mt-1'>Luxury Mansion in Warri</p>
              <div className='flex items-center mt-1'>
                <img src={log3} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-sm ml-1'>8 bed</p>
                <img src={log4} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>10 Bath</p>
                <img src={log5} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-sm ml-1'>8000 sq ft</p>
              </div>
          </div>
        </div> 
        </div>

        <div className='bg-pale-green relative'>
        <h1 className='font-bold lg:text-2xl text-3xl absolute top-10 lg:left-28 left-20'>Meet Our Agents</h1>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mr-20'>
          <div>
          <img src={img11} alt="" className='mt-24 lg:ml-[] ml-24'/>
         <div className='flex flex-col items-center'>
         <p className='lg:ml-[6rem] ml-20 font-semibold'>Agent Samuel</p>
         <div className='ml-28'>
         <p className='lg:ml-3 mr-8 text-xs text-center'>Specialist in luxury properties</p>
         </div>
         <p className='lg:ml-[] ml-20 text-xs'>+2349022234561</p>
         </div>
          </div>
          <div className='ml-8'>
          <img src={img12} alt="" className='mt-24 lg:ml-14 ml-16'/>
         <div className='flex flex-col items-center'>
         <p className='lg:ml-20 ml-10 font-semibold'>Agent Yeni</p>
         <p className='lg:ml-20 ml-10 text-xs'>Specialist in real estate</p>
         <p className='lg:ml-20 ml-10 text-xs'>+2349044501181</p>
         </div>
          </div>
          <div className='ml-8'> 
          <img src={img14} alt="" className='mt-24 ml-16'/>
         <div className='flex flex-col items-center'>
         <p className='lg:ml-20 ml-12 font-semibold'>Agent Emeka</p>
         <p className='lg:ml-20 ml-12 text-xs'>Specialist in Marketing</p>
         <p className='lg:ml-20 ml-12 text-xs'>+2349059610001</p>
         </div>
          </div>
          <div>
          <img src={img15} alt="" className='mt-24 lg:ml-28 ml-24'/>
         <div className='flex flex-col items-center'>
         <p className='lg:ml-32 ml-20 font-semibold'>Agent Shatu</p>
         <p className='lg:ml-32 ml-20 text-xs'>Specialist in real estate</p>
         <p className='lg:ml-32 ml-20 text-xs'>+2349034567591</p>
         </div>
          </div>
        </div>
        </div>

        <div className='bg-pale-green relative'>
        <h1 className='font-bold text-2xl absolute top-10 lg:left-28 left-9'>Latest News and Resources</h1>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mr-14'>
        <div className=' lg:ml-24 ml-16 mt-24 rounded-lg w-[100%]'>
          <img src={img16} alt="" className='h-[12rem]  '/>
          <div className='bg-white w-[83.6%] pb-4 rounded-bl-lg rounded-br-lg'>
          <span className=" flex items-center">
            <div className='flex items-center mt-2 ml-5'>
                <img src={log10} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-xs ml-1'>Samuel O.</p>
                <img src={log11} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-xs ml-1'>6/08/2024</p>
              </div>
          </span>
            <p className='text-xs mt-1 ml-5 w-[90%]'><b>Top Tips for First-Time Homebuyers:</b> Learn the essentials for a smooth homebuying experience </p>
            <div className='flex justify-between items-center'>
            <img src={log12} alt="" className='mt-5 ml-5'/>
            <p className='mt-5 mr-36 text-custom-green text-sm w-[10rem]'>Read more</p>
            </div>
          </div>         
          </div>
        <div className=' lg:ml-24 ml-16 mt-24 rounded-lg w-[100%]'>
          <img src={img17} alt="" className='h-[12rem]  '/>
          <div className='bg-white w-[83.6%] pb-4 rounded-bl-lg rounded-br-lg'>
          <span className=" flex items-center">
            <div className='flex items-center mt-1 ml-5'>
                <img src={log10} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-xs ml-1'>Omoyeni A.</p>
                <img src={log11} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-xs ml-1'>5/08/2024</p>
              </div>
          </span>
            <p className='text-xs mt-2 ml-5 w-[90%]'><b>How to choose the right neighborhood:</b> Find out what to look for in a neighborhood. </p>
            <div className='flex justify-between items-center'>
            <img src={log12} alt="" className='mt-5 ml-5'/>
            <p className='mt-5 mr-36 text-custom-green text-sm w-[10rem]'>Read more</p>
            </div>
          </div>         
          </div>
        <div className=' lg:ml-24 ml-16 mt-24 rounded-lg w-[100%]'>
          <img src={img18} alt="" className='h-[12rem]  '/>
          <div className='bg-white w-[83.6%] pb-4 rounded-bl-lg rounded-br-lg'>
          <span className=" flex items-center">
            <div className='flex items-center mt-2 ml-5'>
                <img src={log10} alt="" className='h-[20px] w-[20px] '/>
                <p className='font-light text-xs ml-1'>Wilson J.</p>
                <img src={log11} alt="" className='h-[20px] w-[20px] ml-3'/>
                <p className='font-light text-xs ml-1'>4/08/2024</p>
              </div>
          </span>
            <p className='text-xs mt-1 ml-5 w-[90%]'><b>Understanding the Mortgage process:</b> A step-by-step guide to getting a mortgage. </p>
            <div className='flex justify-between items-center'>
            <img src={log12} alt="" className='mt-5 ml-5'/>
            <p className='mt-5 mr-36 text-custom-green text-sm w-[10rem]'>Read more</p>
            </div>
          </div>         
          </div>
        </div> 
        </div>
        <div className='bg-pale-green relative'>
          <h1 className='font-bold text-2xl absolute left-16 top-12'>Customer Testimonials</h1>   
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mr-14 w-[100%]'>
          <div className='bg-new-green p-5 rounded-3xl lg:ml-24 ml-10 mt-44 lg:w-[30%] w-[80%]'>
          <img src={img19} alt="" className='lg:ml-[] ml-20 absolute lg:top-32 top-28'/>
            <p className='font-normal text-base text-center mt-10'>“Finding our new home was a breeze with this website. Highly recommend!”</p>
              <div className='flex items-center mt-1'>
                <p className='text-base font-semibold ml-14 mt-3'>James Bowel</p>
              </div>
          </div>
          <div className='bg-new-green relative p-5 rounded-3xl ml-10 mt-44 lg:mr-16 lg:w-[30%] w-[80%]'>
          <img src={img20} alt="" className='lg:ml-[] ml-20 absolute lg:top-32' style={{top: "-4rem"}}/>
            <p className='font-normal text-base text-center mt-10'>“Professional and efficient service. I found the perfect property!”</p>
              <div className='flex items-center mt-1'>
                <p className='text-base font-semibold ml-14 mt-3'>Ajibola Mary</p>
              </div>
          </div>
          <div className='bg-new-green p-5 rounded-3xl mr-10 ml-10 mt-44 lg:mr-28 lg:w-[30%]'>
          <img src={img21} alt="" className='lg:ml-20 absolute lg:bottom-[9rem] bottom-[9rem] ml-20' />
            <p className='font-normal text-base text-center mt-10'>“Great experience from start to finish. Thank you for helping me find my dream home!”</p>
              <div className='flex items-center mt-1'>
                <p className='text-base font-semibold ml-10 mt-3'>Jonathan Michael</p>
              </div>
          </div>
          </div>
          </div>
          <div className='bg-custom-green flex flex-col lg:justify-between relative lg:w-[1263px] h-[349px] mt-10 mb-14'>
          <div className='lg:w-[483px] w-[300px] h-[324px] lg:mr-[60rem] lg:ml-10 ml-10 mt-3 pb-5'>
        <img src= {img22} alt="" className='lg:w-[483px] w-[300px]'/>
    </div>
        <div className='lg:w-[630px] lg:h-[179px] lg:mt-0 mt-4 absolute lg:top-[85px] top-[200px] lg:left-[600px]'>
            <h1 className='lg:text-[40px] text-white lg:text-center-none text-center font-[700] lg:mr-[27.9px] lg:pb-3'>Ready to Find Your Dream Home?</h1>
            <p className='lg:text-[20px] text-white lg:text-center-none text-center font-[600] lg:mr-[85px] lg:pb-4'>Start your search today and find the property of your dreams</p>
            <button className='bg-white text-custom-green text-sm border py-3 px-6 ml-28 lg:ml-0 rounded-full'>Browse Properties</button>
        </div>
        
    
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
