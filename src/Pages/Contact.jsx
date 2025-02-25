import React from 'react'
import '../CSS/contact.css'
import ContactForm from '../Components/ContactForm'
import CompanyLogos from '../Components/CompanyLogos'

function Contact() {
  return (
    <>
      <div className="banner">
        <img src='./public/assets/contactbanner.jpeg' alt='' className="banner-image " /> 
        <div className="banner-caption">
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* CompanyLogos */}
      <div className="SiteLogo">
         <h1>Our Clients</h1>
          <CompanyLogos />
      </div>      
      
      <div>
        <ContactForm/>
      </div>
    </>
  )
}

export default Contact
