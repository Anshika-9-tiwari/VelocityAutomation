import React from 'react'
import SmartCard from '../SmartCard';

const SmartWorkerCard = () => {
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

  return (
    <>
     <div style={{backgroundColor:'white'}}>
        <h1 className='p-4 m-3'>Overview</h1>
        <div className="card-container">
          {cardData1.map((card, index) => (
            <SmartCard key={index} {...card} /> 
          ))}
        </div>
      </div>
    </>
  )
}

export default SmartWorkerCard
