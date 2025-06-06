import React from 'react'
import SmartCard from '../SmartCard'
import { Link } from 'react-router-dom'


const SmartMachineCard = () => {
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
    <div>
        <h1 className='p-4 m-3'>Overview</h1>
        <Link to='/machine-monitoring'>
          <div className="card-container gap-4" > 
            {cardData4.map((card, index) => (
              <SmartCard key={index} {...card} /> 
            ))}
          </div>
        </Link>
      </div>
    </>
  )
}

export default SmartMachineCard;
