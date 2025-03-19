import React from 'react'
import CapabilitiesCard from './CapabilitiesCard'
import { Link } from 'react-router-dom'

const CapabilityHomeCardList = () => {
  const homeCard1 =[
    {
      image: "./public/assets/AI_Pic.jpeg",
      title: 'Artificial Intelligence'
    },
    {
      image: "./public/assets/plc_programming.jpeg",
      title: 'Computer Vision'
    },
    {
      image: "./public/assets/Robotics-Img.jpeg",
      title: 'Robotics'
    }
  ]
  const homeCard2 =[
    {
      image: "./public/assets/IOT_Banner.jpeg",
      title: 'IIOT'
    },
    {
      image: "./public/assets/System_Ent.png",
      title: 'System Integration'
    },
    {
      image: "./public/assets/cloud.jpeg",
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
