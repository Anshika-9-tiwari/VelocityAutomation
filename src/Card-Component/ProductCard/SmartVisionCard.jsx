import React from 'react'
import SmartCard from '../SmartCard'


const SmartVisionCard = () => {
  const cardData2 =[
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

  return (
    <>
     <div style={{backgroundColor:'rgba(240, 248, 255, 0.271)'}}>
        <h1 className='p-4 m-0'>Overview</h1>
        <div className="card-container gap-4"> 
          {cardData2.map((card, index) => (
            <SmartCard key={index} {...card} /> 
          ))}
        </div>
      </div>
    </>
  )
}

export default SmartVisionCard
