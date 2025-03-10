import React from 'react'
import SmartSecurityCard from '../../Card-Component/ProductCard/SmartSecurityCard'
import { PiSealCheckBold } from "react-icons/pi";
import ContactImp from '../../Components/ContactImp';


const SmartSecurity = () => {
  return (
    <>
      <div className="banner">
        <img src='./public/assets/productbanner.jpeg' alt='' className="banner-image" /> 
        <div className="banner-caption">
          <h1>Smart Security</h1>
        </div>
      </div>

      <div>
        <SmartSecurityCard/>
      </div>

      <div className="main-div">
          <div className="image-div">
            <img src="./public/assets/automaticsmartgate.jpeg" alt="Products-smart-worker" />
          </div>
          <div className="text-div">
            <h1>Smart Gate & ANPR</h1>
            <p>
              ANPR, which stands for Automatic Number Plate Recognition, is an advanced technology used to automatically capture and read vehicle number plates. Also known as License Plate Recognition (LPR) or License Plate Recognition (LPR) systems, Smart Gate and ANPR uses specialized cameras and software to capture images of vehicle license plates and convert them into machine-readable text.
            </p>
            <p>
              The ANPR system operates by analyzing the captured images of license plates and extracting the alphanumeric characters from them. The smart gate utilizes various automated features and connectivity capabilities to enhance security, convenience, and control. Smart gates are commonly used in residential, commercial, and industrial settings, offering a modern and efficient alternative to traditional gates.
            </p>
          </div>
        </div>
        <div className="product-container">
          <div className="product-image-container">
            <img src="./public/assets/plcprogramming.jpeg" alt="Your Image" />
          </div>
          <div className="product-content-container">
            <h1 className='mb-4'>Product Features</h1>
            <p>
              Smart Gate and ANPR solution offers various benefits and features like:
            </p>
            <ul style={{listStyle:'none'}}>
              <li>
                <PiSealCheckBold  style={{marginRight:'10px'}}/> 
                <span>Real-time object detection</span>
              </li>
              <li>
                <PiSealCheckBold style={{marginRight:'10px'}}/>
                <span>Optical Character Recognition (OCR)</span>
              </li>
              <li>
                <PiSealCheckBold style={{marginRight:'10px'}}/> 
                <span>Image Processing</span>
              </li>
              <li>
                <PiSealCheckBold style={{marginRight:'10px'}}/>
                <span>Smart parking management</span>
              </li>
              <li>
                <PiSealCheckBold style={{marginRight:'10px'}}/>
                <span>Vehicle Tracking</span>
              </li>
            </ul>
          </div>
        </div>
    
      <div className="main-div">
        <div className="text-div">
          <h1>Boundary Management System</h1>
          <p>
            The Boundary Management System offers a holistic approach to manage boundaries within a factory, encompassing physical access, data governance, safety zones, and equipment maintenance. 
          </p>
          <p>
            By seamlessly integrating computer vision technology and smart algorithms, it enables organisations to streamline operations, enhance security, and empower the workforce to perform at their best.
          </p>
        </div>
        <div className="image-div">
          <img src="./public/assets/warehouse.jpeg" alt="Products-smart-worker" />
        </div>
      </div>
      <div className="product-container">
        <div className="product-image-container">
          <img src="./public/assets/PLCProtocol.jpeg" alt="Your Image" />
        </div>
        <div className="product-content-container">
          <h1 className='mb-4'>Product Features</h1>
          <p>
            Boundary Management solution offers various benefits and features like:
          </p>
          <ul style={{listStyle:'none'}}>
            <li>
              <PiSealCheckBold  style={{marginRight:'10px'}}/> 
              <span>Safety Zones and Hazard Management</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Real-Time Monitoring and Alerts</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/> 
              <span>Integration Capabilities with CCTV Cameras</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Analytics and Insights</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Role based access</span>
            </li>
          </ul>
        </div>
      </div>
    
      <div className="main-div">
        <div className="image-div">
          <img src="./public/assets/warehousemanagement.jpeg" alt="Products-smart-worker" />
        </div>
        <div className="text-div">
          <h1>Shoplifting Detection</h1>
          <p>
            As the retail landscape evolves and technology advances, so do the methods employed by shoplifters, making it crucial for businesses to adopt innovative and comprehensive shoplifting solutions.
          </p>
          <p>
            Our shoplifting solution encompasses a holistic approach that combines artificial intelligence and computer vision-based technology. By addressing this issue proactively, retailers safeguard their profits, protect their reputation, and maintain a safe and welcoming environment for their customers
          </p>
        </div>
      </div>
      <div className="product-container">
        <div className="product-image-container">
          <img src="./public/assets/Software&ScadaSystem.png" alt="Your Image" />
        </div>
        <div className="product-content-container">
          <h1 className='mb-4'>Product Features</h1>
          <p>
            Shoplifting solution offers various benefits and features like:
          </p>
          <ul style={{listStyle:'none'}}>
            <li>
              <PiSealCheckBold  style={{marginRight:'10px'}}/> 
              <span>Theft Management</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Real-Time Monitoring and Alerts</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/> 
              <span>Integration Capabilities with CCTV Cameras</span>
            </li>
            <li>
              <PiSealCheckBold style={{marginRight:'10px'}}/>
              <span>Analytics and Insights</span>
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

export default SmartSecurity
