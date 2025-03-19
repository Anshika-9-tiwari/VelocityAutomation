import React from 'react'
import '../CSS/capabilities.css'
import ContactImp from '../Components/ContactImp'
import CapabilityCardList1 from '../Card-Component/CapabilitiesCardComponents/CapabilityCardList1'
import CapabilityCardList2 from '../Card-Component/CapabilitiesCardComponents/CapabilityCardList2'
import CapabilityCardList3 from '../Card-Component/CapabilitiesCardComponents/CapabilityCardList3'
import CapabilityCardList4 from '../Card-Component/CapabilitiesCardComponents/CapabilityCardList4'
import CapabilityCardList5 from '../Card-Component/CapabilitiesCardComponents/CapabilityCardList5'
import CapabilityCardList6 from '../Card-Component/CapabilitiesCardComponents/CapabilityCardList6'


function Capabilities() {
  return (
    <>
      <div className="banner">
        <img src='./public/assets/capabilitybanner.jpeg' alt='' className="banner-image" /> 
        <div className="banner-caption">
          <h1>Capabilities</h1>
        </div>
      </div>  


      {/*Artificial Intelligence  */}
      <div id="artificial-intelligence">
        <div className='capability-container'>
          <div className='capability-content1'>
            <span><img src="./public/assets/AI_Pic.jpeg" alt="" /></span>
          </div>
          <div className='capability-content2'>
            <h1  style={{color:'blueviolet'}}>Artificial Intelligence</h1>
            <p>Artificial intelligence (AI) solutions encompass a wide range of applications and technologies that aim to mimic human intelligence and perform tasks that typically require human intelligence, such as problem-solving, learning, perception, and decision-making.</p>
            <p>Our AI solutions are being used in various industries and domains to improve efficiency, automation, and decision support.</p>
          </div>
        </div>

       {/* Our Success Story */}
        <div>
          <CapabilityCardList1/>
        </div>
      </div>
      
     
     {/*computer vision */}
     <div className='capability-container'>
        <div className='capability-content1'>
          <span><img src="./public/assets/plc_programming.jpeg" alt="" /></span>
        </div>
        <div className='capability-content2'>
          <h1  style={{color:'blueviolet'}}>Computer Vision</h1>
          <p>Computer vision solutions encompass a wide range of technologies and applications aimed at enabling computers to analyze and understand visual information from the world. Our solutions use various algorithms, deep learning models, and computer vision techniques to process and interpret images and videos. </p>
        </div>
     </div>

      {/* Our Success Story */}
      <div>
        <CapabilityCardList2/>
      </div>


     {/*Data and Analytics   */}
     <div className='capability-container'>
        <div className='capability-content1'>
          <span><img src="./public/assets/Data_Analytics.jpg" alt=""  /></span>
        </div>
        <div className='capability-content2'>
          <h1  style={{color:'blueviolet'}}>Data and Analytics </h1>
          <p>Data and analytics technology encompasses a wide range of tools, systems, and techniques used to collect, process, analyze, and derive insights from data. It is crucial for organizations across various industries to make data-driven decisions and gain a competitive edge. The data insights drive informed decision-making, optimize operations, and enhance product quality, ultimately increasing efficiency and competitiveness across various industries.</p>
        </div>
      </div>


       {/* data analytics Success Story */}
       <div>
        <CapabilityCardList3/>
       </div>


     {/*IIOT  */}
     <div className='capability-container'>
        <div className='capability-content1'>
          <span><img src="./public/assets/IOT_banner.jpeg" alt=""  /></span>
        </div>
        <div className='capability-content2'>
          <h1  style={{color:'blueviolet'}}>IIOT </h1>
          <p>The Industrial Internet of Things (IIoT) is a crucial component of Industry 4.0. IIoT plays a central role in transformation by connecting physical devices, machines, and systems to the internet, allowing them to collect and exchange data in real-time. </p>

          <p>We connect a wide range of industrial devices, such as sensors, PLC, gateways such as sensors, machines, actuators, and other equipment, to the internet or local networks. This connectivity is typically achieved through wired or wireless communication protocols, including Wi-Fi, Ethernet, Bluetooth, and cellular networks.</p>
        </div>
      </div>

      {/* IIOT Success Story */}
      <div>
        <CapabilityCardList4/>
      </div>


     {/*Robotics*/}
      <div className='capability-container'>
        <div className='capability-content1'>
          <span><img src="./public/assets/Robotics-Img.jpeg" alt=""  /></span>
        </div>
        <div className='capability-content2'>
          <h1  style={{color:'blueviolet'}}>Robotics</h1>
          <p>Visual inspection in robotics is a critical application that involves using robotic systems equipped with cameras and image processing     capabilities to examine and assess objects or environments based on their visual characteristics. We use this technology in various industries for tasks like quality control, defect detection, object recognition, and much more.
          </p>
        </div>
      </div>

      {/* Robotics Success Story */}
      <div>
        <CapabilityCardList5/>
      </div>


     {/*Cloud Computing*/}
     <div className='capability-container'>
        <div className='capability-content1'>
          <span><img src="./public/assets/cloud.jpeg" alt=""  /></span>
        </div>
        <div className='capability-content2'>
          <h1  style={{color:'blueviolet'}}>Cloud Computing</h1>
          <p>Cloud computing provides the infrastructure and services needed to manage data, connectivity, and remote access, making Industry 4.0 initiatives more achievable and cost-effective for businesses in the manufacturing sector.</p>

          <p>Also, cloud facilitates the integration of IoT data and provides the necessary infrastructure in our solutions to process andanalyze data, leading to smarter and more efficient manufacturing.</p>
        </div>
      </div>

      {/*Cloud computing */}
      <div>
        <CapabilityCardList6/>
      </div>


     {/*System Integration*/}
     <div className='capability-container'>
        <div className='capability-content1'>
          <span><img src="./public/assets/System_Ent.png" alt=""  /></span>
        </div>
        <div className='capability-content2'>
          <h1  style={{color:'blueviolet'}}>System Integration</h1>
          <p>Our smart factory suite can be integrated with any of the ERP (SAP, Oracle, etc.) systems. We enable smart manufacturing by means of closed-loop data workflows, and our key is to realize PLM, MES, and ERP integration via bi-directional technical interfaces. The three systems, once integrated, become interdependent, and the resulting technical architecture is able to support the entire product lifecycle process from start to finish.</p>
          <ul>
            <li> Enterprise Application Integration (EAI)</li>
            <li>Data Integration (DI)</li>
            <li>Electronic Document Integration/Interchange (EDI)</li>
          </ul>
        </div>
      </div>


      {/* Contact Info */}
      <div>
        <ContactImp/>
      </div>

    </>
  )
}

export default Capabilities
