import React from 'react'
import CapabilitiesCard from './CapabilitiesCard';

const CapabilityCardList2 = () => {
  const cardData2 = [
    {
      image: "./public/assets/realimg.jpg",
      title: 'Quality label inspection solution for leading brewery'
    },
    {
      image: "./public/assets/img2.jpg",
      title: 'Filled Bottle Inspection for leading brewery company'
    },
    {
      image: "./public/assets/bottelstock.jpg",
      title: 'Empty bottle quality inspection for leading brewery & beverages company'
    }
  ];
      
return (
      <div>
         <div className='capability-topHead'>
              <span>Computer Vision Solution</span>
          </div>
          <div className='capability-heading'>
            <h1>Success Story</h1>
          </div>
          <div className='capability-box' style={{marginBottom:'4em'}}> 
            {cardData2.map((card, index) => (
              <CapabilitiesCard key={index} {...card} /> // Spread operator to pass props
            ))}
          </div>
      </div> 
  )
}

export default CapabilityCardList2
