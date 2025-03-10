import React from 'react'
import SmartVisionCard from '../../Card-Component/ProductCard/SmartVisionCard'
import { PiSealCheckBold } from "react-icons/pi";
import ContactImp from '../../Components/ContactImp';

const SmartVision = () => {
  return (
    <>
      <div className="banner">
        <img src='./public/assets/productbanner.jpeg' alt='' className="banner-image" /> 
        <div className="banner-caption">
          <h1>Smart Vision</h1>
        </div>
      </div>

      <div>
        <SmartVisionCard/>
      </div>

      <div className='industries-overview mt-3 '>
          <h1>Overview of Smart Vision</h1>
          <div className='Overview-paragraph1'>
            <p style={{marginLeft:'1em'}}>
              Quality inspection, using computer vision system is a  critical process in manufacturing and production industries aims to ensure products meet predefined quality standards and specifications.
            </p>
          </div>
          <div className='Overview-paragraph2'>
            <p>
              It involves a systematic and thorough examination of products, materials, or processes to identify defects, deviations, or inconsistencies that could impact product performance, safety, and overall customer satisfaction.
            </p>
            <p>
              We use computer vision technology like laser, camera & sensors for quality inspection to maintain and improve product quality, reliability, and consistency.
            </p>
          </div>
      </div>
      <div className="product-container" style={{backgroundColor:'rgba(240, 248, 255, 0.271)'}}>
        <div className="product-image-container">
          <img src="./public/assets/Software&ScadaSystem.png" alt="Your Image" />
        </div>
        <div className="product-content-container">
          <h1 className='mb-4'>Product Capabilities</h1>
          <p>
            Vision inspection system for quality includes the following features:
          </p>
          <ul style={{listStyle:'none'}}>
            <li>
              <PiSealCheckBold  style={{marginRight:'10px'}}/> 
              <span>Anomaly Detection</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Object Presence Detection</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/> 
              <span>Object Segmentation & Classification</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Object Measurement</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Visual Defect Detection</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='choosen-box1 '>
        <div className='item-choosen1'>
            <img src="./public/assets/PLCSCADA.jpeg" width={530} height={300} alt="" style={{borderRadius:'18px', marginBottom:'1em'}}/>
        </div>
        <div className=' item-choosen2'>
          <h1>Anomaly Detection</h1>
          <p>
            Our anomaly detection tools utilize advanced algorithms to sift through vast datasets, providing you with real-time alerts and actionable intelligence.
          </p>
          <p>
            Stay ahead of potential threats, anomalies, or irregularities, safeguarding your systems and optimizing performance.
          </p>
        </div>
      </div>
      <div className='choosen-box2 ' style={{backgroundColor:'rgba(240, 248, 255, 0.271)'}}>
        <div className=' item-choosen2 mt-5'>
          <h1>Object Presence Detection</h1>
          <p>
            Harnessing the latest in computer vision and artificial intelligence, our tools empower you to effortlessly identify and track objects in any environment.
          </p>
          <p>
            Seamlessly integrate object presence detection into your applications, enhancing security, automating processes, and enabling a new era of efficiency
          </p>
        </div>
        <div className='item-choosen1' style={{marginRight:'0.2em', borderRadius:'18px 0px'}}>
            <img src="./public/assets/SystemEnt.png" width={530} height={300} alt="" style={{borderRadius:'18px 0px', marginTop:'1em'}}/>
        </div>
      </div>

      <div className='choosen-box1 '>
        <div className='item-choosen1'>
            <img src="./public/assets/PLCProtocol.jpeg" width={530} height={300} alt="" style={{borderRadius:'18px', marginBottom:'1em'}}/>
        </div>
        <div className=' item-choosen2'>
          <h1>Object Segmentation & Classification</h1>
          <p>
            Revolutionize your visual understanding with our advanced object segmentation solutions.
          </p>
          <p>
            Delve into the realm of precision and detail as our cutting-edge technology seamlessly separates and identifies objects in images or videos.
          </p>
        </div>
      </div>
      <div className='choosen-box2 ' style={{backgroundColor:'rgba(240, 248, 255, 0.271)'}}>
        <div className=' item-choosen2 mt-5'>
          <h1>Visual Defect Detection</h1>
          <p>
            From manufacturing lines to product inspections, our technology ensures a meticulous examination of every detail, guaranteeing the highest standards of quality.
          </p>
          <p>
            Boost efficiency, reduce errors, and streamline your operations with our cutting-edge visual defect detection capabilities.
          </p>
        </div>
        <div className='item-choosen1' style={{marginRight:'0.2em', borderRadius:'18px 0px'}}>
            <img src="./public/assets/VisualDefect.png" width={530} height={300} alt="" style={{borderRadius:'18px 0px', marginTop:'1em'}}/>
        </div>
      </div>
      <div className='choosen-box1 '>
        <div className='item-choosen1'>
            <img src="./public/assets/Robotics.jpeg" width={530} height={300} alt="" style={{borderRadius:'18px', marginBottom:'1em'}}/>
        </div>
        <div className=' item-choosen2'>
          <h1>Object Measurement</h1>
          <p>
            Transform your approach to measurement with our advanced object measurement solutions.
          </p>
          <p>
            Dive into a realm of precision and efficiency as our technology utilizes sophisticated algorithms and cutting-edge techniques for accurate and reliable object measurements.
          </p>
        </div>
      </div>

      <div>
       <ContactImp/>
      </div>
   </>
  )
}

export default SmartVision
