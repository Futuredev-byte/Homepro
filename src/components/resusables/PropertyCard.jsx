import React from 'react'
import ngnIcon from "../../assets/icons/CurrencyNgn.png"
import heart from "../../assets/icons/Heart.png"
import bedIcon from '../../assets/icons/Bed.png';
import bathIcon from '../../assets/icons/Bathtub.png'
import tdesign from '../../assets/icons/tdesign_measurement-2.png'

const PropertyCard = ({ _id, title, image, price, bed, bath, size }) => {
    return (
        <>
            <div className="bg-slate-50 rounded-xl max-w-[400px] h-[396px] hover:border text-sm" key={_id}>
                <div className='rounded-lg p-6 max-w-[400px]'>
                    <img src={image} alt='37(1)' className='w-[325px] h-[245px] r-[15px]' />
                    <div className=' flex text-[#1F1F1F] relative text-2xl font-Avenir LT Std w-[154px] justify-between my-1 '>
                        <img src={ngnIcon} alt='ngnIcon' className=' w-[29px]' />
                        <span>{price.toLocaleString("en-us")}</span>
                        <img src={heart} alt='vector' className=' absolute top-[1px] left-[70px] flex h-[20px] w-[21px] mx-36 my-1' />
                    </div>
                    <div className='text-[#1F1F1F] weight-[700] h-5 w-[275px] font-Avenir LT Std text-xl font-semibold'>
                        <h3>{title}</h3>
                    </div>
                    <div className='flex text-[#1F1F1F] my-4 relative'>
                        <div className=' text-[#1F1F1F] my-3 flex w-[120px] h-[24px]'>
                            <img src={bedIcon} alt='bed' className='w-[24px] h-[24px] mx-1 ' />
                            <span className='mt-1'>{bed} bed</span>
                            </div>
                        <div className='text-[#1F1F1F] flex my-3 w-[100px] h-[24px] absolute left-10 ml-8'>
                            <img src={bathIcon} alt='bath' className='w-[40px] h-[24px] top-[2.25px] right-[6px] px-2' />
                            <span className='mt-1 mr-3'>{bath} bath</span>
                            </div>
                        <div className=' text-[#1F1F1F] w-[100px] flex  font-Avenir LT Std h-[25px] absolute left-36 ml-3 my-3'>
                            <img src={tdesign} alt='tdesign' className='w-[20.91px] h-[20.83]  text-[#1F1F1F]' />
                            <span className='mt-1 ml-1'>{size} sq ft</span>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyCard