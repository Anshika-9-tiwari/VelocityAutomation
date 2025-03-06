import React from 'react'
import CapabilitiesCard from './CapabilitiesCard'
import { Link } from 'react-router-dom'

const CapabilityHomeCardList = () => {
  const homeCard1 =[
    {
      image: "./public/assets/AI-Pic.jpeg",
      title: 'Artificial Intelligence'
    },
    {
      image: "./public/assets/plcprogramming.jpeg",
      title: 'Computer Vision'
    },
    {
      image: "./public/assets/Robotics.jpeg",
      title: 'Robotics'
    }
  ]
  const homeCard2 =[
    {
      image: "./public/assets/IOT banner.jpeg",
      title: 'IIOT'
    },
    {
      image: "./public/assets/SystemEnt.png",
      title: 'System Integration'
    },
    {
      image: "./public/assets/Cloud.jpeg",
      title: 'Cloud Computing'
    }
  ]
  return (
    <div className='capability'>
      <div className='capability-topHead'>
        <span>Capabilities</span>
      </div>
      <div className='capability-heading'>
        <h1>Reimagine the future with us</h1>
      </div>

      <Link to='capabilities' style={{textDecoration:'none'}}>
        <div className='capability-box' style={{marginBottom:'1em'}}> 
            {homeCard1.map((card, index) => (
              <CapabilitiesCard key={index} {...card} /> // Spread operator to pass props
            ))}
        </div>
      </Link>
      
      <Link to='capabilities' style={{textDecoration:'none'}}>
        <div className='capability-box' style={{marginBottom:'4em'}}> 
            {homeCard2.map((card, index) => (
              <CapabilitiesCard key={index} {...card} /> // Spread operator to pass props
            ))}
        </div>
      </Link>
    </div> 
  )
}

export default CapabilityHomeCardList
