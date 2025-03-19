import React from 'react'
import CapabilitiesCard from './CapabilitiesCard'

const CapabilityCardList5 = () => {
  const cardData5 =[
    {
      image: "./public/assets/PPE-Monitoring.png",
      title: 'Vision Inspection of Part Hole and Pocket Count Detection'
    },
    {
      image: "./public/assets/Robotics-Img.jpeg",
      title: 'Vision Inspection of Cross Car Beam (CCB)'
    },
    {
      image: "./public/assets/IndustryFac.jpg",
      title: 'Digital Quality Inspection Solution for Auto Parts Manufacturing'
    }
  ]


  return (
    <div>
      <div className='capability-topHead' >
            <span>Robotics Solution</span>
      </div>
      <div className='capability-heading'>
        <h1>Success Story</h1>
      </div>
      <div className='capability-box' style={{marginBottom:'4em'}}> 
        {cardData5.map((card, index) => (
          <CapabilitiesCard key={index} {...card} /> // Spread operator to pass props
        ))}
      </div>
    </div> 
  )
}

export default CapabilityCardList5
