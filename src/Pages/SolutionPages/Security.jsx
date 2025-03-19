import React from 'react'
import { MdContactEmergency, MdOutlineSecurity, MdOutlineContentPasteOff, MdOutlineDifference, MdLeaderboard    } from "react-icons/md";
import ContactImp from '../../Components/ContactImp';

const Security = () => {
  return (
    <>
      <div className="banner">
        <img src='./public/assets/Automaticsmartgate.jpeg' alt='' className="banner-image " /> 
        <div className="banner-caption" style={{fontSize:'1.9em',fontWeight:'800px', color:'white'} }>
          <li>Smart Gate & ANPR</li>
          <li>Boundary Management System</li>
          <li>Shoplifting Detection</li>
        </div>
      </div>
      <div className='industries-container' >
        <div className='industries-overview '>
          <h1>Smart Gate & ANPR Overview</h1>
          <div className='Overview-paragraph1'>
            <p style={{marginLeft:'1em'}}>
              ANPR, which stands for Automatic Number Plate Recognition, is an advanced technology used to automatically capture and read vehicle number plates. Also known as License Plate Recognition (LPR) or License Plate Recognition (LPR) systems, Smart Gate and ANPR uses specialized cameras and software to capture images of vehicle license plates and convert them into machine-readable text.
            </p>
          </div>
          <div className='Overview-paragraph2'>
            <p>
              The ANPR system operates by analyzing the captured images of license plates and extracting the alphanumeric characters from them. The smart gate utilizes various automated features and connectivity capabilities to enhance security, convenience, and control. Smart gates are commonly used in residential, commercial, and industrial settings, offering a modern and efficient alternative to traditional gates.
            </p>
          </div>
        </div>

        <div className="Solutions-container" >
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
              <MdOutlineContentPasteOff  className='icon'/>
              <h3>Manual Vehicle Data Entry</h3>
              <p>No system for vehicle data entry</p>
            </div>
            <div className="Solutions-card">
              <MdOutlineDifference className='icon'/> 
              <h3>Inaccurate Data Collection</h3>
              <p>Data is collected manually that is prone to mistakes</p>
            </div>
            <div className="Solutions-card">
              <MdOutlineSecurity className='icon'/> 
              <h3>Higher Security Risks</h3>
              <p>Risks are higher due to unidentified vehicle</p>
            </div>
          </div>
        </div>
        <div className='choosen-box1 '>
          <div className='item-choosen1'>
              <img src="./public/assets/Warehousemanage.jpeg" width={530} height={300} alt="" style={{borderRadius:'18px', marginBottom:'1em'}}/>
          </div>
          <div className=' item-choosen2'>
            <h1>Boundary Management System</h1>
            <p>
              In a rapidly evolving industrial landscape, maintaining precise boundaries is paramount to ensuring efficient operations, heightened security, and regulatory compliance. The system redefines the way factories manage and control their boundaries by providing tools to optimize your processes and protect your assets.
            </p>
            <p>
              The Boundary Management System offers a holistic approach to manage boundaries within a factory, encompassing physical access, data governance, safety zones, and equipment maintenance. By seamlessly integrating computer vision technology and smart algorithms, it enables organisations to streamline operations, enhance security, and empower the workforce to perform at their best.
            </p>
          </div>
        </div>
        <div className='choosen-box2 'style={{backgroundColor:'rgba(240, 248, 255, 0.407)'}}>
          <div className=' item-choosen2 mt-5'>
            <h2>Shoplifting Detection Solutions</h2>
            <p>
              Shoplifting is a persistent challenge faced by retailers worldwide, resulting in significant financial losses and security concerns. The act of stealing merchandise from stores not only impacts the bottom line but also disrupts the shopping experience for customers and creates a sense of insecurity among staff.
            </p>
            <p>
              Our shoplifting solution encompasses a holistic approach that combines artificial intelligence and computer vision-based technology. By addressing this issue proactively, retailers safeguard their profits, protect their reputation, and maintain a safe and welcoming environment for their customers.
            </p>
          </div>
          <div className='item-choosen1' style={{marginRight:'0.2em', borderRadius:'18px 0px'}}>
              <img src="./public/assets/Warehouse.jpeg" width={530} height={300} alt="" style={{borderRadius:'18px 0px', marginTop:'1em'}}/>
          </div>
        </div>

        <div className="Solutions-container" >
          <div className="Solutions-top-section">
            <div className="Solutions-paragraph-section">
              <h2>Industries across various sectors face a wide range of challenges</h2>
              <p>
                Industries across various sectors face a wide range of challenges. These challenges can vary depending on the industry and its specific circumstances, but some common challenges faced by industries include:
              </p>
            </div>
          </div>
          <div className="Solutions-bottom-section">
            <div className="Solutions-card">
              <MdLeaderboard  className='icon'/>
              <h3>Financial Losses</h3>
              <p>Persistent shoplifting leads to significant revenue loss, impacting profit margins and necessitating price increases.</p>
            </div>
            <div className="Solutions-card">
              <MdContactEmergency className='icon'/> 
              <h3>Employee Morale</h3>
              <p>Frequent shoplifting can create a less positive work environment, affecting employee satisfaction and retention.</p>
            </div>
            <div className="Solutions-card">
              <MdOutlineSecurity className='icon'/> 
              <h3>Reputation Damage</h3>
              <p>Shoplifting incidents harm a retailer’s reputation, eroding trust and potentially leading to negative publicity.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ContactImp/>
      </div>
    </>
  )
}

export default Security
