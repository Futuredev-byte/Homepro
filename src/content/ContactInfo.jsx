import React from 'react'
import Footer from '../components/footer';
import Jumbotron from '../components/Jumbotrun'
import GetIn from "../components/contact/getIn"
import Mansion from '../components/contact/Mansion';
import PropertyDetails from '../components/contact/propertyDetail';
import PropertyOverview from '../components/contact/propertyOverview';
// import Dashboard from "../components/Dash/dashBoard"

const Contact = () => {
  return (
    <div>
      <div className='md:pt-32 pt-10'>
      {/* <Jumbotron title="Have any Questions?" description="We are available, contact us"/> */}
      <GetIn/>
      </div>
      {/* <Dashboard/> */}
      <Mansion/>
      <PropertyDetails/>
      <PropertyOverview/>
    </div>
  )
}

export default Contact;