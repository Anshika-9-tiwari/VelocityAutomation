import React from 'react'
import '../CSS/footer.css'
import { CiLocationOn } from "react-icons/ci";
import { MdAttachEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { MdContactEmergency } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <>

      <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <img src="./public/assets/VelocityALogo1.png" alt="" width={200} className='mb-3 pt-0' />
                    <p className='p1' >VELOCITY Automation was established to meet the demand of industrial Automation requirements in PLC/DCS/MES/SCADA. We offer end to engineering  solutions from project conceptualization; engineering dexsign and development to commissioning service for process industries assisted with   onshore & offshore 24*7 service support. </p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>                              
                        <li><a href="solutions">Solutions</a></li>
                        <li><a href="product">Products</a></li>
                        <li><a href="smartFactory">Smart Factory</a></li>
                        <li><a href="automotive">Industries</a></li>
                        <li><a href="capabilities">Capabilities</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4> Contact Us</h4>
                    <p className='p2'><CiLocationOn style={{marginRight:'3px'}}/>  Mathura Road , Faridabad Sec-28 , Haryana</p>
                    <p className='p2'><MdAttachEmail style={{marginRight:'3px'}}/>  info@velocityautomation.co.in</p>
                    <p className='p2'><CgWebsite style={{marginRight:'3px'}}/>  www.velocityautomation.co.in</p>
                    <p className='p2'><MdContactEmergency style={{marginRight:'3px'}}/>  + 98182 93887</p>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className='footer-bottom-1'> 
                    <a href="https://web.whatsapp.com/" className='text-white'><FaWhatsapp /></a> 
                    <a href=""className='text-white'><IoLogoLinkedin /> </a>
                </div>
                <div className='footer-bottom-1 mt-3 '>
                    <p>© 2018 Your Company. All rights reserved.</p>
                </div>
            </div>
      </footer>
     
    </>
  )
}

export default Footer
