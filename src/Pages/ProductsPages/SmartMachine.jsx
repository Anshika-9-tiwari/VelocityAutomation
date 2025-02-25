import React from 'react'
import SmartMachineCard from '../../Card-Component/ProductCard/SmartMachineCard'

const SmartMachine = () => {
  return (
    <>
      <div className="banner">
        <img src='./public/assets/productbanner.jpeg' alt='' className="banner-image" /> 
        <div className="banner-caption">
          <h1>Smart Machine</h1>
        </div>
      </div>

      <div>
        <SmartMachineCard/>
      </div>
   </>
  )
}

export default SmartMachine
