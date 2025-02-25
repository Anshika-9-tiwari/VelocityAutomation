import React from 'react'
import { PiSealCheckBold } from "react-icons/pi";

function Solutions() {
  return (
    <>
      <div className="solution-container  bg-white">
        <div className='solution-heading'><span><h1>Revolutionize Digitally with Industry Solutions</h1></span></div>
          <div className="two-div-section">
            <div className="solution-image-container">
            <img src="./public/assets/GroupEngineer.jpg" alt="Images" /> 
            </div>
            <div className="content-container">
              <h2>People</h2>
              <ul className="icon-list">
                <li>
                  <PiSealCheckBold  style={{marginRight:'20px'}}/> 
                  <span>FR Based Attendance</span>
                </li>
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}} /> 
                  <span>Field Salesforce Monitoring</span>
                </li>
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}} /> 
                  <span>Workforce Cost Analytics</span>
                </li>
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}} /> 
                  <span>PPE Monitoring for Safety</span>
                </li>
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}} /> 
                  <span>Workforce Planning & Monitoring</span>
                </li>
              </ul>
            </div>

            <div className="solution-image-container">
            <img src="./public/assets/foodbevmachine.jpg" alt="Images" /> 
            </div>
            <div className="content-container">
              <h2>Machine</h2>
              <ul className="icon-list">
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}}/> 
                  <span>Machine Utilization & Productivity</span>
                </li>
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}}/> 
                  <span>Condition Based Monitoring</span>
                </li>
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}} /> 
                  <span>Energy Monitoring</span>
                </li>
              </ul>
            </div>

            <div className="content-container">
              <h2>Business</h2>
              <ul className="icon-list">
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}}/> 
                  <span>Production Planning and Scheduling</span>
                </li>
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}}/> 
                  <span>Digital Assistant</span>
                </li>
              </ul>
            </div>
            <div className="solution-image-container">
            <img src="./public/assets/WorkforceCost.jpeg" alt="Images" /> 
            </div>

            <div className="content-container">
              <h2>Quality</h2>
              <ul className="icon-list">
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}}/> 
                  <span>Computer Vision based Quality Inspection</span>
                </li>
              </ul>
            </div>
            <div className="solution-image-container">
            <img src="./public/assets/electricpower.png" alt="Images" /> 
            </div>

            <div className="solution-image-container">
            <img src="./public/assets/Security.jpeg" alt="Images" /> 
            </div>
            <div className="content-container">
              <h2>Security</h2>
              <ul className="icon-list">
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}}/> 
                  <span>Smart Gate (ANPR)</span>
                </li>
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}}/> 
                  <span>Boundary Management System</span>
                </li>
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}}/> 
                  <span> Shoplift Detection </span>
                </li>
              </ul>
            </div>

            <div className="solution-image-container">
            <img src="./public/assets/img2.jpg" alt="Images" /> 
            </div>
            <div className="content-container">
              <h2>Material</h2>
              <ul className="icon-list">
                <li>
                <PiSealCheckBold style={{marginRight:'20px'}}/>
                  <span>Traceability</span>
                </li>
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}} />
                  <span>Warehouse Management</span>
                </li>
                <li>
                  <PiSealCheckBold style={{marginRight:'20px'}}/>
                  <span>Scrap & Bin Management</span>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Solutions
