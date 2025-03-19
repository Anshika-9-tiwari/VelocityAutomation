
import React from 'react'
import {MdManageHistory, MdOutlineDomainDisabled, MdQueryStats } from 'react-icons/md'
import { PiHandTap,  PiTrendUpFill } from "react-icons/pi";
import { MdVerifiedUser, MdSensorOccupied, MdOutlineRoomPreferences } from "react-icons/md";
import ContactImp from '../../Components/ContactImp'

const Quality = () => {
  return (
    <>
      <div className="banner">
        <img src='./public/assets/PLC_SCADA.jpeg' alt='' className="banner-image " /> 
        <div className="banner-caption" style={{fontWeight:'800px', color:'orange'} }>
          <h1>Quality Inspection</h1>
        </div>
      </div>
      <div className='industries-container' >
        <div className='industries-overview '>
          <h1>Quality Inspection Overview</h1>
          <div className='Overview-paragraph1'>
            <p style={{marginLeft:'1em'}}>
              Quality inspection, using machine vision system is a  critical process in manufacturing and production industries aims to ensure products meet predefined quality standards and specifications.
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

        <div className="Solutions-container" id='facial-recognition'>
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
              <MdManageHistory className='icon'/>
              <h3>High Costs</h3>
              <p>Failing to catch defects early in production process leading to higher costs</p>
            </div>
            <div className="Solutions-card">
              <MdOutlineDomainDisabled className='icon'/> 
              <h3>Safety Risk</h3>
              <p>Bad quality of critical products leading to safety hazards</p>
            </div>
            <div className="Solutions-card">
              <MdQueryStats className='icon'/> 
              <h3>Waste and Inefficiency</h3>
              <p>Without quality checks, resources are wasted on producing faulty products</p>
            </div>
          </div>
        </div>
        <div className='choosen-box2 '>
          <div className=' item-choosen2 mt-5'>
            <h2>Anomaly Detection</h2>
            <p>
              Our anomaly detection tools utilize advanced algorithms to sift through vast datasets, providing you with real-time alerts and actionable intelligence..
            </p>
            <p>
              Stay ahead of potential threats, anomalies, or irregularities, safeguarding your systems and optimizing performance.
            </p>
          </div>
          <div className='item-choosen1' style={{marginRight:'0.2em', borderRadius:'18px 0px'}}>
              <img src="./public/assets/System_Ent.png" width={530} height={300} alt="" style={{borderRadius:'18px 0px', marginTop:'1em'}}/>
          </div>
        </div>

        <div>
          <ContactImp/>
        </div>

        <div className="Solutions-heading-section">
          <h1 className='m-5'>Value Delivered</h1>
        </div>
        <div className="SecCard-container">
          <div className="responsive-div">
            <MdSensorOccupied className='SecCard-icon'/> 
            <h4>Accurate Inspection</h4>
          </div>
          <div className="responsive-div">
            <MdOutlineRoomPreferences className='SecCard-icon'/>
            <h4>Reduced Costs</h4>
          </div>
          <div className="responsive-div">
            <MdVerifiedUser className='SecCard-icon'/>
            <h4>Enhanced Reputation</h4>
          </div>
          <div className="responsive-div">
            <PiTrendUpFill className='SecCard-icon'/>
            <h4>Improved Product Quality</h4>
          </div>
          <div className="responsive-div">
            <PiHandTap className='SecCard-icon'/>
            <h4>Data-Driven Decision Making</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quality
