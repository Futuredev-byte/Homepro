import React from 'react'
import Jumbotron from '../components/aboutHero'
import AboutInfo from '../content/About'
import Footer from '../components/footer'

const About = () => {


  return (
    <div>
        <Jumbotron/>
        <AboutInfo/>
        <div className='mt-12'>
        <Footer/>
        </div>
        
    </div>
  )
}

export default About 