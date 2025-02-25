import React from 'react'
import CapabilitiesCard from './CapabilitiesCard'

const CapabilityCardList6 = () => {
  const cardData6 =[
    {
      image: "./public/assets/PPEMonitoring.png",
      title: 'Die Tracking & Maintenance for Leading Passenger Vehicles Manufacturers'
    },
    {
      image: "./public/assets/SystemEnt.png",
      title: 'Field Salesforce Monitoring for Leading Quick Service Restaurant Operators'
    }
  ]


  return (
    <div>
      <div className='capability-topHead'>
            <span>Cloud Computing Solution</span>
      </div>
      <div className='capability-heading'>
         <h1>Success Story</h1>
      </div>
      <div className='capability-box' style={{marginBottom:'4em'}}> 
          {cardData6.map((card, index) => (
            <CapabilitiesCard key={index} {...card} /> // Spread operator to pass props
          ))}
      </div>
    </div> 
  )
}

export default CapabilityCardList6
