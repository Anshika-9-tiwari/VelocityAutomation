import React from 'react'
import SmartCard from '../SmartCard'
import { Link } from 'react-router-dom'


const SmartSecurityCard = () => {
  const cardData3 =[
    {
      image: "./public/assets/security.png",
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
        <Link to='/smartgatesecurity'>
          <div className="card-container">
            {cardData3.map((card, index) => (
              <SmartCard key={index} {...card} /> 
            ))}
          </div>
        </Link>
      </div>
    </>
  )
}

export default SmartSecurityCard;
