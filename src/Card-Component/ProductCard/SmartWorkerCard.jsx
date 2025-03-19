import React from 'react'
import SmartCard from '../SmartCard';
import { Link } from 'react-router-dom';

const SmartWorkerCard = () => {
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
      // description: 'Description for card 3.  Even more text here.'
    },
    {
      image: "./public/assets/PPE-Monitoring.png",
      title: 'PPE Monitoring',
    }

  ];

  return (
    <>
     <div style={{backgroundColor:'white'}}>
        <h1 className='p-4 m-3'>Overview</h1>
        <Link to='/facial-recognition'>
          <div className="card-container">
            {cardData1.map((card, index) => (
              <SmartCard key={index} {...card} /> 
            ))}
          </div>
        </Link>
      </div>
    </>
  )
}

export default SmartWorkerCard
