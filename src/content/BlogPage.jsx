import React from 'react'
import FirstBlog from './FirstBlog'
import SecondBlog from './SecondBlog'
import ThirdBlog from './ThirdBlog'
import img1 from '../assets/Icons/Frame 175.png'
import img2 from '../assets/Icons/Frame 172.png'
import img3 from '../assets/Icons/Frame 173.png'
import img4 from '../assets/Icons/Frame 174.png'
import img5 from '../assets/Icons/Frame 176.png'
import img6 from '../assets/Icons/Frame 177.png'
import Footer from '../components/footer'

const BlogPage = () => {
  return (
    <div className='bg-pale-green'>
        
        <FirstBlog/>
        
        <SecondBlog/>

        <ThirdBlog/>        

        <span className='flex justify-start items-center mt-8 ml-[33rem]'>
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

export default BlogPage