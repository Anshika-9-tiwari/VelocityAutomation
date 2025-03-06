import React from 'react'
import '../../CSS/SolutionsPages.css'
import { PiUserFocusFill, PiFingerprintLight,  PiHandTap,  PiTrendUpFill } from "react-icons/pi";
import { MdContactEmergency, MdVerifiedUser, MdSensorOccupied, MdOutlineRoomPreferences } from "react-icons/md";
import ContactImp from '../../Components/ContactImp';

const People = () => {
  return (
   <>
     <div className="banner">
        <img src='./public/assets/GroupEngineer.jpg' alt='' className="banner-image " /> 
        <div className="banner-caption" style={{fontSize:'1.8em',fontWeight:'600', color:'white'} }>
          <li>Face Recognition</li>
          <li>Workforce Cost Analysis</li>
          <li>FieldForce Monitoring</li>
          <li>PPE Monitoring</li>
        </div>
      </div>

      <div className='industries-container' >
        <div className='industries-overview '>
          <h1>Facial Recognition Overview</h1>
          <div className='Overview-paragraph1'>
            <p style={{marginLeft:'1em'}}>
              Facial recognition is one of the fastest-growing technologies; it is widely used in mobile phones and tablets to ensure secure access. AI Facial Recognition system is built for identifying a person from a video or image. The technology uses computer vision algorithms to map, analyze, and confirm the identity of a face on a photo or a video. It searches the existing database of faces and compares them with the detected face to find a match.
            </p>
          </div>
          <div className='Overview-paragraph2'>
            <p>
              Our experienced developers build top-notch facial recognition software to suit your business requirements. Our team specializes in implementing facial recognition attendance systems, providing seamless and efficient solutions for workforce management and security enhancement.
            </p>
          </div>
        </div>

        <div className="Solutions-container">
          <div className="Solutions-top-section">
            <div className="Solutions-heading-section">
              <h1>Challenges</h1>
            </div>
            <div className="Solutions-paragraph-section">
              <p>
                Industries across various sectors face a wide range of challenges. These challenges can vary depending on the industry and its specific circumstances, but some common challenges faced by industries include:
              </p>
            </div>
          </div>
          <div className="Solutions-bottom-section">
            <div className="Solutions-card">
              <PiFingerprintLight className='icon'/>
              <h3>Inaccurate attendance record</h3>
              <p>Wrong detection with manual attendance check</p>
            </div>
            <div className="Solutions-card">
              <MdContactEmergency className='icon'/> 
              <h3>Access control</h3>
              <p>Unauthorised access leading to security gaps</p>
            </div>
            <div className="Solutions-card">
              <PiUserFocusFill className='icon'/> 
              <h3>Misuse of authentication system</h3>
              <p>Exploiting vulnerabilities in authentication processes</p>
            </div>
          </div>
        </div>
        <div className='choosen-box2 '>
          <div className=' item-choosen2 mt-5'>
            <h2>Workforce Cost Analytics</h2>
            <p>
              In today’s fast-paced and competitive business landscape, organizations need to be agile and efficient in their decision-making processes.</p>
            <p>
              Workforce Cost Analytics is a powerful tool that goes beyond traditional bookkeeping and expense tracking. It harnesses the power of data to provide a comprehensive and detailed view of all the costs associated with managing the workforce on shopfloors.
            </p>
          </div>
          <div className='item-choosen1' style={{marginRight:'0.2em', borderRadius:'18px 0px'}}>
              <img src="./public/assets/FaceRecog.png" width={530} height={300} alt="" style={{borderRadius:'18px 0px', marginTop:'1em'}}/>
          </div>
        </div>

        <div>
         <ContactImp/>
        </div>

        <div className="Solutions-heading-section">
          <h1 className='m-5'>Benefits of the FR Attendance System</h1>
        </div>
        <div className="SecCard-container">
          <div className="responsive-div">
            <MdSensorOccupied className='SecCard-icon'/> 
            <h4>Enhanced Security</h4>
            <p>Identify suspicious individuals and verify identities quickly.</p>
          </div>
          <div className="responsive-div">
            < MdOutlineRoomPreferences className='SecCard-icon'/>
            <h4>Fraud Prevention</h4>
            <p>Secure financial transactions and other sensitive activities with facial verification</p>
          </div>
          <div className="responsive-div">
            <MdVerifiedUser className='SecCard-icon'/>
            <h4>Streamlined Attendance</h4>
            <p>Automate time and attendance tracking for effortless management</p>
          </div>
          <div className="responsive-div">
            <PiTrendUpFill className='SecCard-icon'/>
            <h4>Seamless User Experience</h4>
            <p>Unlock devices and access accounts with a convenient and user-friendly experience।</p>
          </div>
          <div className="responsive-div">
            <PiHandTap className='SecCard-icon'/>
            <h4>Fast & Contactless Verification</h4>
            <p>Verify identities quickly and hygienically with facial recognition</p>
          </div>
        </div>
      </div>
      
   </>
  )
}

export default People
