import React from 'react'
import { MdContactPhone } from "react-icons/md";



function ContactImp() {
  return (
    <>
      <div className="contact-us-box">
          <div className='contact-us-content1'>
            <span  className='icon'><MdContactPhone /></span>
          </div>
          <div className='contact-us-content2'>
            <h2 style={{fontWeight:'bold', textAlign:'center', fontSize:'2em', marginBottom:'0.5em'}}>Contact Us</h2>
            <p>Hey! Are you facing the same industry challenges in your organisation? We can help you digitize and transform your
              challenges and problems into potential digital solutions.
            </p>
            <h6 style={{fontWeight:'bold'}}>Talk to our experts to know more about our products and solutions.</h6>
          </div>
          <a href="contact">
            <div className='contact-us-content1'>
              <button> Get Started  </button>
            </div>
          </a>
       </div>
    </>
  )
}

export default ContactImp
