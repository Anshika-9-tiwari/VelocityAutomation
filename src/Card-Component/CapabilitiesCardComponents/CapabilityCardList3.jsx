import React from 'react'
import CapabilitiesCard from './CapabilitiesCard'

const CapabilityCardList3 = () => {
  const cardData3 =[
    {
      image: "./public/assets/Workforce_Cost.jpeg",
      title: 'Workforce cost analytics'
    },
    {
      image: "./public/assets/Soflifting.png",
      title: 'Shoplifting Detection'
    },
    {
      image: "./public/assets/Energy_Monitoring .jpg",
      title: 'Energy Monitoring'
    }
  ]
  return (
    <div>
        <div className='capability-heading'>
          <div className='capability-topHead' >
              Data & Analytics Solution
          </div>
            <h1>Success Story</h1>
          </div>
          <div className='capability-box' style={{marginBottom:'4em'}}> 
            {cardData3.map((card, index) => (
              <CapabilitiesCard key={index} {...card} /> // Spread operator to pass props
            ))}
          </div>
      </div> 
  )
}

export default CapabilityCardList3
