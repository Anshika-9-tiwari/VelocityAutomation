import React from 'react'
import SmartMachineCard from '../../Card-Component/ProductCard/SmartMachineCard'
import ContactImp from '../../Components/ContactImp'
import { PiSealCheckBold } from "react-icons/pi";


const SmartMachine = () => {
  return (
    <>
      <div className="banner">
        <img src='./public/assets/Productbanner.jpeg' alt='' className="banner-image" /> 
        <div className="banner-caption">
          <h1>Smart Machine</h1>
        </div>
      </div>

      <div>
        <SmartMachineCard/>
      </div>

      <div className='industries-overview mt-3 '>
        <h1>Machine Monitoring</h1>
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
      <div className="product-container" style={{backgroundColor:'rgba(240, 248, 255, 0.271)'}}>
        <div className="product-image-container">
          <img src="./public/assets/Indus-gov.jpeg" alt="Your Image" />
        </div>
        <div className="product-content-container">
          <h1 className='mb-4'>Product Capabilities</h1>
          <p>
            The Machine Monitoring solution offers features like:
          </p>
          <ul style={{listStyle:'none'}}>
            <li>
              <PiSealCheckBold  style={{marginRight:'10px'}}/> 
              <span>Management Dashboard</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>OEE (Availability, Quality, Performance)</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/> 
              <span>Downtime Analysis</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Real-time Monitoring</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Capacity vs Utilization</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Production Planning</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='industries-overview mt-3 '>
        <h1>Condition-Based Machine Monitoring</h1>
        <div className='Overview-paragraph1'>
          <p style={{marginLeft:'1em'}}>
            Condition-Based Machine Monitoring Solution is a comprehensive and intelligent system designed to provide real-time insights into the performance of  machines and production lines.
          </p>
        </div>
        <div className='Overview-paragraph2'>
          <p>
          It empowers organisations with valuable data, analytics, and visualization tools that enable data-driven decision-making, proactive maintenance, and continuous process improvement.
          </p>
          <p>
            By harnessing the power of advanced sensors, data analytics, and machine learning, our solution offers real-time insights into the condition of your assets, enabling you to take proactive measures and prevent costly failures before they occur.
          </p>
        </div>
      </div>
      <div className="product-container" style={{backgroundColor:'rgba(240, 248, 255, 0.271)'}}>
        <div className="product-image-container">
          <img src="./public/assets/System_Ent.png" alt="Your Image" />
        </div>
        <div className="product-content-container">
          <h1 className='mb-4'>Product Capabilities</h1>
          <p>
            Condition Based Monitoring solution has the following features like:
          </p>
          <ul style={{listStyle:'none'}}>
            <li>
              <PiSealCheckBold  style={{marginRight:'10px'}}/> 
              <span>Preventive maintenance</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Anomalies detection</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/> 
              <span>Proactive maintenance scheduling</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Optimization of spare part inventory</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Predictive maintenanc</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Analytics and real-time data</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='industries-overview mt-3 '>
        <h1>Energy Monitoring</h1>
        <div className='Overview-paragraph1'>
          <p style={{marginLeft:'1em'}}>
            Our Energy Monitoring Solution is a comprehensive & intelligent platform designed to provide organizations with real-time insights into their energy consumption and usage patterns.
          </p>
        </div>
        <div className='Overview-paragraph2'>
          <p>
            One of the biggest demands on businesses to reduce their energy spend is the implementation of energy monitoring systems. The approach of the smart energy monitoring system keeps track of the energy consumption of various plant areas continuously.
          </p>
          <p>
            By leveraging advanced technologies, data analytics, and smart algorithms, our solution empowers businesses to optimize energy efficiency, reduce costs, and enhance sustainability efforts.
          </p>
        </div>
      </div>
      <div className="product-container" style={{backgroundColor:'rgba(240, 248, 255, 0.271)'}}>
        <div className="product-image-container">
          <img src="./public/assets/PLC_SCADA.jpeg" alt="Your Image" />
        </div>
        <div className="product-content-container">
          <h1 className='mb-4'>Product Capabilities</h1>
          <p>
            The Energy Monitoring solution offers various benefits and features like:.
          </p>
          <ul style={{listStyle:'none'}}>
            <li>
              <PiSealCheckBold  style={{marginRight:'10px'}}/> 
              <span>Energy Consumption Analysis</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Energy Benchmarking</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/> 
              <span>Reports and Alerts</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Real-Time Dashboard</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
       <ContactImp/>
      </div>
   </>
  )
}

export default SmartMachine
