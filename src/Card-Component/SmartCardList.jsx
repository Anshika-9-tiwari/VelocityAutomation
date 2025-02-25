import React from 'react';
import SmartCard from './SmartCard';


const SmartCardList = () => {
  const cardData1 = [
    {
      image: "./public/assets/FaceRecog.png",
      title: 'Face Recognition'
    },
    {
      image: "./public/assets/WorkforceCost.jpeg",
      title: 'Workforce Cost Analytics'
    },
    {
      image: "./public/assets/saleforce.png",
      title: 'Field Salesforce Monitoring',
    },
    {
      image: "./public/assets/SystemEnt.png",
      title: 'Workforce Presence And Planing',
      // description: 'Description for card 3.  Even more text here.'
    },
    {
      image: "./public/assets/PPEMonitoring.png",
      title: 'PPE Monitoring',
    }

  ];

  const cardData2 =[
    {
      image: "./public/assets/smartgate.png",
      title: 'Smart Gate & ANPR',
    },
    {
      image: "./public/assets/Warehouse.jpeg",
      title: 'Boundary Management System',
      
    },
    {
      image: "./public/assets/soflifting.png",
      title: 'Shoplifting Detection',
    }
  ]

  const cardData3 =[
    {
      image: "./public/assets/electricpower.png",
      title: 'Anomaly Detection',
    },
    {
      image: "./public/assets/SystemEnt.png",
      title: 'Object Presence Detection'
    },
    {
      image: "./public/assets/Objectsegmen.png",
      title: 'Object Segmentation',
    },
    {
      image: "./public/assets/VisualDefect.png",
      title: 'Visual Defect Detection',
    }
  ]

  const cardData4 =[
    {
      image: "./public/assets/indus-gov.jpeg",
      title: 'Machine Monitoring',
    },
    {
      image: "./public/assets/SystemEnt.png",
      title: 'Condition-Based Monitoring',
      },
    {
      image: "./public/assets/WorkforceCost.jpeg",
      title: 'Energy Monitoring',
    }
  ]

  return (
    <>
      <div style={{backgroundColor:'beige'}}>
        <h1 className='p-4 m-3'>Smart Worker</h1>
        <div className="card-container"> {/* Container to arrange cards */}
          {cardData1.map((card, index) => (
            <SmartCard key={index} {...card} /> // Spread operator to pass props
          ))}
        </div>
      </div>

      <div style={{backgroundColor:'white'}}>
        <h1 className='p-4 m-3'>Smart Vision</h1>
        <div className="card-container gap-4"> 
          {cardData2.map((card, index) => (
            <SmartCard key={index} {...card} /> 
          ))}
        </div>
      </div>

      <div  style={{backgroundColor:'beige'}}>
        <h1 className='p-4 m-3'>Smart Security</h1>
        <div className="card-container">
          {cardData3.map((card, index) => (
            <SmartCard key={index} {...card} /> 
          ))}
        </div>
      </div>
      
      <div>
        <h1 className='p-4 m-3'>Smart Machine</h1>
        <div className="card-container gap-4" > 
          {cardData4.map((card, index) => (
            <SmartCard key={index} {...card} /> 
          ))}
        </div>
      </div>
   </>
    
  );
};

export default SmartCardList;


