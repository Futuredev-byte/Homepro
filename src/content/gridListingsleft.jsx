import React, {useState} from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Rightside from './gridListingRight'
import FeaturedProp from './FeaturedProp';


const GridListings = () => {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isBedroomsOpen, setIsBedroomsOpen] = useState(false);
    const [isPropTypeOpen, setIsPropTypeOpen] = useState(false);
    const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(false);

    const toggleLocationDropdown = () => {
      setIsLocationOpen(!isLocationOpen);
    };
    const toggleBedroomsDropdown = () => {
      setIsBedroomsOpen(!isBedroomsOpen);
    };
    const togglePropTypeDropdown = () => {
      setIsPropTypeOpen(!isPropTypeOpen);
    };
    const togglePriceRangeDropdown = () => {
      setIsPriceRangeOpen(!isPriceRangeOpen);
    };
  return (
    <div>
        <div className='lg:grid lg:grid-cols-2'>
            <div className='w-[400px] lg:h-[465px] lg:pt-0 pt-1 lg:pb-0 pb-8 bg-weird-grey lg:mt-20 mt-14 lg:ml-16 rounded-xl'>
                {/* First */}
                <div className='relative bg-weird-white h-[46px] w-[338px] rounded-md mt-8 ml-8'>
                    <p className='absolute ml-4 top-3 '>Location</p>
                    </div>


                    <button
                      onClick={toggleLocationDropdown}
                        className="ml-2 p-2 rounded-md absolute lg:bottom-[3.5rem] lg:left-[24rem] bottom-[15rem] left-[20rem]">

                        {isLocationOpen ? (
                    <IoIosArrowUp className=" transition-transform duration-200" />
                    ) : (
                    <IoIosArrowDown className=" transition-transform duration-200" />
                    )}
                    </button>

                    {isLocationOpen && (
        <div className="absolute left-[98px] mt-2 w-[338px] bg-white border border-gray-300 rounded-lg shadow-lg max-h-32 overflow-y-auto z-10">
          <ul className="py-2 text-center">
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">Abuja</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">Lagos</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">Kano</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">Benin city</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">Warri</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">Aba</li>
          </ul>
        </div>
      )}

         {/* Second  */}
<div className='relative bg-weird-white h-[46px] w-[338px] rounded-md mt-8 ml-8'>
                    <p className='absolute ml-4 top-3 '>Bedrooms</p>
                    </div>


                    <button
                      onClick={toggleBedroomsDropdown}
                        className="ml-2 p-2 rounded-md absolute lg:left-[23.9rem] lg:bottom-[-19px] left-[20rem] bottom-[10.2rem]">

                        {isBedroomsOpen ? (
                    <IoIosArrowUp className=" transition-transform duration-200" />
                    ) : (
                    <IoIosArrowDown className=" transition-transform duration-200" />
                    )}
                    </button>

                    {isBedroomsOpen && (
        <div className="absolute left-[98px] mt-2 w-[338px] bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto z-10">
          <ul className="py-2 text-center">
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">1 Bedroom</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">2 Bedroom</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">3 Bedroom</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">4 Bedroom</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">5 Bedroom</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">6 Bedroom</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">7 Bedroom</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">8 Bedroom</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">9 Bedroom</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">10 Bedroom</li>
          </ul>
        </div>
      )}

      {/* Third */}
<div className='relative bg-weird-white h-[46px] w-[338px] rounded-md mt-8 ml-8'>
                    <p className='absolute ml-4 top-3 '>Property Type</p>
                    </div>


                    <button
                      onClick={togglePropTypeDropdown}
                        className="ml-2 p-2 rounded-md absolute lg:left-[23.9rem] lg:bottom-[-6rem] bottom-[5.5rem] left-[20rem]">

                        {isPropTypeOpen ? (
                    <IoIosArrowUp className=" transition-transform duration-200" />
                    ) : (
                    <IoIosArrowDown className=" transition-transform duration-200" />
                    )}
                    </button>

                    {isPropTypeOpen && (
        <div className="absolute left-[98px] mt-2 w-[338px] bg-white border border-gray-300 rounded-lg shadow-lg max-h-32 overflow-y-auto z-10">
          <ul className="py-2 text-center">
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">Bungalow</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">Duplex</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">Penthouse</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">Studio</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">Villa</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">Chalet</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">Estate</li>
          </ul>
        </div>
      )}
      {/* Fourth */}
<div className='relative bg-weird-white h-[46px] w-[338px] rounded-md mt-8 ml-8'>
                    <p className='absolute ml-4 top-3 '>Price Range</p>
                    </div>


                    <button
                      onClick={togglePriceRangeDropdown}
                        className="ml-2 p-2 rounded-md absolute lg:left-[23.9rem] lg:top-[45.5rem] top-[45rem] left-[20rem]">

                        {isPriceRangeOpen ? (
                    <IoIosArrowUp className=" transition-transform duration-200" />
                    ) : (
                    <IoIosArrowDown className=" transition-transform duration-200" />
                    )}
                    </button>

                    {isPriceRangeOpen && (
        <div className="absolute left-[98px] mt-2 w-[338px] bg-white border border-gray-300 rounded-lg shadow-lg max-h-72 overflow-y-auto z-10">
          <ul className="py-2 text-center">
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">10M-30M</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">30M-50M</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">50M-100M</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">100M-300</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">300M-500M</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">500M-1b</li>
            <li className="px-4 py-2 hover:text-custom-green cursor-pointer">1B and Above</li>
          </ul>
        </div>
      )}

      <button className='bg-custom-green text-white lg:mt-12 mt-8 lg:pb-0 ml-8 w-[338px] h-[54px] rounded-3xl'>
        Search Property
      </button>
            </div>
            <div className='lg:mt-20 mt-[1rem] lg:mr-8 max-w-full'>
            <Rightside/>
            </div>
            <div className='relative max-h-[500px] lg:mt-0 mt-[47rem]'>
              <div className='absolute bottom-[5rem] lg:left-[4rem]'>
            <FeaturedProp/>
            </div>
            </div>
          
        </div>
    </div>
  )
}

export default GridListings