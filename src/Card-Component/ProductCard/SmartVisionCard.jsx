import React from 'react'
import SmartCard from '../SmartCard'
import {Link} from 'react-router-dom'

const SmartVisionCard = () => {
  const cardData2 =[
  {
    image: "./public/assets/PLCSCADA.jpeg",
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
    image: "./public/assets/Visual_Defect.png",
    title: 'Visual Defect Detection',
  }
]

  return (
    <>
     <div style={{backgroundColor:'rgba(240, 248, 255, 0.271)'}}>
        <h1 className='p-4 m-0'>Overview</h1>
        <Link to='/quality'>
          <div className="card-container gap-4"> 
            {cardData2.map((card, index) => (
              <SmartCard key={index} {...card} /> 
            ))}
          </div>
        </Link>
      </div>
    </>
  )
}

export default SmartVisionCard
