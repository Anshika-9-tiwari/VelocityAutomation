import React from 'react'
import CapabilitiesCard from './CapabilitiesCard'

const CapabilityCardList4 = () => {
  const cardData4 =[
    {
      image: "./public/assets/MachineMonitoring.jpg",
      title: 'Machine Monitoring'
    },
    {
      image: "./public/assets/Energy_Monitoring .jpg",
      title: 'Energy Monitoring'
    },
    {
      image: "./public/assets/PLC_SCADA.jpeg",
      title: 'Condition based monitoring'
    }
  ]
  return (
    <div>
      <div className='capability-topHead' >
          <span>IIOT Solution</span>
      </div>
      <div className='capability-heading'>
        <h1>Success Story</h1>
      </div>
      <div className='capability-box' style={{marginBottom:'4em'}}> 
        {cardData4.map((card, index) => (
          <CapabilitiesCard key={index} {...card} /> // Spread operator to pass props
        ))}
      </div>
    </div> 
  )
}

export default CapabilityCardList4
