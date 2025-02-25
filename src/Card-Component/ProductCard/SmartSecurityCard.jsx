import React from 'react'
import SmartCard from '../SmartCard'

const SmartSecurityCard = () => {
  const cardData3 =[
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

  return (
    <>
     <div  style={{backgroundColor:'white'}}>
        <h1 className='p-4 m-3'>Overview</h1>
        <div className="card-container">
          {cardData3.map((card, index) => (
            <SmartCard key={index} {...card} /> 
          ))}
        </div>
      </div>
    </>
  )
}

export default SmartSecurityCard;
