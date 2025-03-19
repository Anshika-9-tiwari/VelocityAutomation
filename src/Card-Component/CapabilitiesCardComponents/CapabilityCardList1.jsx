import React from 'react';
import CapabilitiesCard from './CapabilitiesCard';

const CapabilityCardList1 = () => {
  const cardData1 = [
    {
      image: "./public/assets/PPE-Monitoring.png",
      title: 'PPE Monitoring solution for leading automotive component manufacturer'
    },
    {
      image: "./public/assets/System_Ent.png",
      title: 'Part Defect Detection for Leading Component Manufacturer'
    },
    {
      image: "./public/assets/Face_Recog.png",
      title: 'Face Recognition for Leading Automotive Component Manufacturer'
    }
  ];

  return (
    <>  
      <div className='m-0 p-0'>
        <div className='capability-topHead'>
           <span> AI Solution</span>
        </div>
        <div className='capability-heading'>
          <h1>Success Story</h1>
        </div>
        <div className='capability-box' style={{marginBottom:'4em'}}> 
          {cardData1.map((card, index) => (
            <CapabilitiesCard key={index} {...card} /> // Spread operator to pass props
          ))}
        </div>
      </div>

   </>
    
  );
};

export default CapabilityCardList1;





