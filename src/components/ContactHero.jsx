import React from 'react'
import logo1 from '../assets/Icons/Line 3.png'

const ContactHero = ({
    title = "Have any Questions?",
    subtitle = "We are available, contact us"
 }) => {
   return (
     <div className='bg-pale-green'>
         <div className='bg-custom-green bg-center w-full lg:mt-32 h-[291px] flex justify-between items-center'
     style={{backgroundImage: `url(${logo1})`}}>
 
 <div className="w-full h-full flex flex-col justify-center items-center bg-transparent">
         <div className="text-center text-white w-full md:max-w-[50%] mx-auto bg-transparent">
           <h1 className="text-3xl md:text-4xl font-bold text-secondary-foreground bg-transparent">
             {title}
           </h1>
           <p className="text-lg text-secondary-foreground font-semibold bg-transparent pt-4 md:mt-0">
             {subtitle}
           </p>
         </div>
       </div>
     </div>
     </div>
  )
}

export default ContactHero