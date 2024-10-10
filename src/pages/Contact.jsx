import React from 'react'
import ContactHero from '../components/ContactHero'
import ContactInfo from '../content/ContactInfo'
import Footer from '../components/footer'

const Contact = () => {
  return (
    <div>
    <ContactHero/>
    <ContactInfo/>
    <div className='mt-10'>
    <Footer/>
    </div>
    </div>
  )
}

export default Contact