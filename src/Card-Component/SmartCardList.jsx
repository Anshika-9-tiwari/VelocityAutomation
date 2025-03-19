import React from 'react';
import SmartCard from './SmartCard';
import {Link} from 'react-router-dom'

const SmartCardList = () => {
  const cardData1 = [
    {
      image: "./public/assets/Face_Recog.png",
      title: 'Face Recognition'
    },
    {
      image: "./public/assets/Workforce_Cost.jpeg",
      title: 'Workforce Cost Analytics'
    },
    {
      image: "./public/assets/Saleforce.png",
      title: 'Field Salesforce Monitoring',
    },
    {
      image: "./public/assets/System_Ent.png",
      title: 'Workforce Presence And Planing',
    },
    {
      image: "./public/assets/PPE-Monitoring.png",
      title: 'PPE Monitoring',
    }

  ];

  const cardData2 =[
    {
      image: "./public/assets/Security.png",
      title: 'Smart Gate & ANPR',
    },
    {
      image: "./public/assets/Warehousepic.jpeg",
      title: 'Boundary Management System',
      
    },
    {
      image: "./public/assets/Soflifting.png",
      title: 'Shoplifting Detection',
    }
  ]

  const cardData3 =[
    {
      image: "./public/assets/PLC_SCADA.jpeg",
      title: 'Anomaly Detection',
    },
    {
      image: "./public/assets/System_Ent.png",
      title: 'Object Presence Detection'
    },
    {
      image: "./public/assets/Object_Segmen.png",
      title: 'Object Segmentation',
    },
    {
      image: "./public/assets/Visual-Defect.png",
      title: 'Visual Defect Detection',
    }
  ]

  const cardData4 =[
    {
      image: "./public/assets/Indus-gov.jpeg",
      title: 'Machine Monitoring',
    },
    {
      image: "./public/assets/System_Ent.png",
      title: 'Condition-Based Monitoring',
      },
    {
      image: "./public/assets/Workforce_Cost.jpeg",
      title: 'Energy Monitoring',
    }
  ]

  return (
    <>
      <div style={{backgroundColor:'beige'}}>
        <h1 className='p-4 m-3'>Smart Worker</h1>
        <Link to='/facial-recognition'>
          <div className="card-container"> 
            {cardData1.map((card, index) => (
              <SmartCard key={index} {...card} />
            ))}
          </div>
        </Link>
      </div>

      <div style={{backgroundColor:'white'}}>
        <h1 className='p-4 m-3'>Smart Vision</h1>
        <Link to='/quality'>
          <div className="card-container gap-4"> 
            {cardData3.map((card, index) => (
              <SmartCard key={index} {...card} /> 
            ))}
          </div>
        </Link>
      </div>

      <div  style={{backgroundColor:'beige'}}>
        <h1 className='p-4 m-3'>Smart Security</h1>
        <Link to='/smartgatesecurity'>
          <div className="card-container">
            {cardData2.map((card, index) => (
              <SmartCard key={index} {...card} /> 
            ))}
          </div>
        </Link>
      </div>
      
      <div>
        <h1 className='p-4 m-3'>Smart Machine</h1>
        <Link to='machine-monitoring'>
          <div className="card-container gap-4" > 
            {cardData4.map((card, index) => (
              <SmartCard key={index} {...card} /> 
            ))}
          </div>
        </Link>
      </div>
   </>
    
  );
};

export default SmartCardList;


