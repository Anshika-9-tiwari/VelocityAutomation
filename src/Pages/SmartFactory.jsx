import React from 'react'
import SmartCardList from '../Card-Component/SmartCardList';
import '../CSS/smartfactory.css';

import ContactImp from '../Components/ContactImp';

function SmartFactory() {
  return (
    <>
    <div>
        <div className="banner">
            <img src='./public/assets/smartfactorybanner.jpeg' alt='' className="banner-image" /> 
            <div className="banner-caption">
              <h2 style={{fontSize:'2.5em'}}>Smart Factory</h2>
            </div>
        </div>      
        
     {/* smart-factory-overview */}
        <div className='smart-container'>
          <div className='factory-box'>
            <h1 className='mt-4 , mb-4'>Overview</h1>
            <p>A smart factory, also known as a smart manufacturing facility or Industry 4.0, is a highly automated and technologically advanced manufacturing environment that leverages cutting-edge technologies to improve efficiency, productivity, and flexibility in production processes. The concept of smart factories is a key component of the fourth industrial revolution (Industry 4.0), which focuses on the integration of digital technologies into manufacturing.</p>
          </div>
          <div className='factory-box' ><img src="./public/assets/SystemEnt.png" alt="" /></div>
        </div>


     {/* Images-Div */}
        <div className='img-box grid-cols-1'>
          <div className='img-boxDiv'>
             <img src="./public/assets/ScadaSys.jpg" alt="" />
          </div>
        </div>


     {/* Smart-factory-Approach */}
        <div className='m-0 p-0'>
          <div className='approach-box1 gap-5 mt-5'>
            <div className='approach-div'><h1>Smart Factory Approach</h1></div>
            <div className='approach-div'>
              <p>The smart factory approach represents a paradigm shift in manufacturing, leveraging advanced technologies to create a more connected, intelligent, and efficient production environment.</p>
              <p>The process followed is Site Assessment, IT Readiness, Process Understanding, Software and Hardware Deployment, and Pilot.</p>
            </div>
          </div>

          <div className='approach-box2'>
              <div className='img-div rounded-lg shadow-lg'><img src="./public/assets/IndusFac.jpg" alt="" /></div>
              <div className='img-div rounded-lg shadow-lg'><img src="./public/assets/automotive.jpeg" alt="" /></div>
          </div>
        </div>


     {/* Smart-Worker */}
        <div>
          <SmartCardList/>
        </div>
      

      {/* Contcat */}
       <div>
         <ContactImp/>
       </div>
      </div>       
    </> 
  )
}

export default SmartFactory

