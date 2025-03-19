import React from 'react'
import ContactImp from '../../Components/ContactImp';
import { MdOutlineTimerOff, MdCallSplit, MdOutlineSettings } from "react-icons/md";
import {   PiHandTap,  PiTrendUpFill } from "react-icons/pi";
import {  MdVerifiedUser, MdSensorOccupied, MdOutlineRoomPreferences } from "react-icons/md";

const Machine = () => {
  return (
    <>
      <div className="banner">
        <img src='./public/assets/Foodbevmachine.jpg' alt='' className="banner-image " /> 
        <div className="banner-caption" style={{fontSize:'1.9em',fontWeight:'800px', color:'orange'} }>
          <li>Machine Monitoring</li>
          <li>Condition Based Monitoring</li>
          <li>Energy Monitoring</li>
        </div>
      </div>

      <div className='industries-container' >
        <div className='industries-overview '>
          <h1>Machine Utilization & Productivity Overview</h1>
          <div className='Overview-paragraph1'>
            <p style={{marginLeft:'1em'}}>
              At its core, our Machine Monitoring Solution is a comprehensive and intelligent system designed to provide real-time insights into the performance of your machines and production lines. It empowers you with valuable data, analytics, and visualization tools that enable data-driven decision-making, proactive maintenance, and continuous process improvement.
            </p>
          </div>
          <div className='Overview-paragraph2'>
            <p>
              Real-time monitoring of machine status, cycle times, downtime reasons, and production rates offers unparalleled visibility into the heart of your manufacturing process. This, in turn, helps identify bottlenecks, optimize workflows, and make informed decisions to boost overall efficiency.
            </p>
            <p>
              Our solution can be used for machine monitoring of different types of machines like stamping, blanking, reeling, peeling, welding, and die casting.
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
              <MdOutlineTimerOff className='icon'/>
              <h3>Real-Time Visibility</h3>
              <p>Wrong detection with manual attendance check</p>
            </div>
            <div className="Solutions-card">
              <MdCallSplit className='icon'/> 
              <h3>Low Productivity</h3>
              <p>Maintain Productivity</p>
            </div>
            <div className="Solutions-card">
              <MdOutlineSettings className='icon'/> 
              <h3>Inaccurate Decision-Making</h3>
              <p>High Operational Costs</p>
            </div>
          </div>
        </div>
        <div className='choosen-box1 ' style={{backgroundColor:'rgba(240, 248, 255, 0.407)'}}>
          <div className='item-choosen1'>
            <img src="./public/assets/Robotics-Img.jpeg" width={530} height={300} alt="" style={{borderRadius:'18px', marginBottom:'1em'}}/>
          </div>
          <div className=' item-choosen2'>
            <h1>Condition Based Monitoring & Maintenance</h1>
            <p>
              Condition-Based Machine Monitoring Solution is a comprehensive and intelligent system designed to provide real-time insights into the performance of  machines and production lines.
            </p>
            <p>
              By harnessing the power of advanced sensors, data analytics, and machine learning, our solution offers real-time insights into the condition of your assets, enabling you to take proactive measures and prevent costly failures before they occur.
            </p>
          </div>
        </div>
        <div className='choosen-box2 '>
          <div className=' item-choosen2 mt-5'>
            <h2>Energy Monitoring</h2>
            <p>
              Our Energy Monitoring Solution is a comprehensive & intelligent platform designed to provide organizations with real-time insights into their energy consumption and usage patterns.
            </p>
            <p>
              One of the biggest demands on businesses to reduce their energy spend is the implementation of energy monitoring systems. The approach of the smart energy monitoring system keeps track of the energy consumption of various plant areas continuously.
            </p>
            <p>
              By leveraging advanced technologies, data analytics, and smart algorithms, our solution empowers businesses to optimize energy efficiency, reduce costs, and enhance sustainability efforts.
            </p>
          </div>
          <div className='item-choosen1' style={{marginRight:'0.2em', borderRadius:'18px 0px'}}>
              <img src="./public/assets/PLC_SCADA.jpeg" width={530} height={300} alt="" style={{borderRadius:'18px 0px', marginTop:'1em'}}/>
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
            <h4>Increased Efficiency</h4>
          </div>
          <div className="responsive-div">
            <MdOutlineRoomPreferences className='SecCard-icon'/>
            <h4>Improved Machine Utilization</h4>
          </div>
          <div className="responsive-div">
            <MdVerifiedUser className='SecCard-icon'/>
            <h4>Decrease in Downtime</h4>
          </div>
          <div className="responsive-div">
            <PiTrendUpFill className='SecCard-icon'/>
            <h4>Enhanced Productivity</h4>
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

export default Machine
