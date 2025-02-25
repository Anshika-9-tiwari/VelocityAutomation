import React from 'react'
import SmartSecurityCard from '../../Card-Component/ProductCard/SmartSecurityCard'

const SmartSecurity = () => {
  return (
    <>
      <div className="banner">
        <img src='./public/assets/productbanner.jpeg' alt='' className="banner-image" /> 
        <div className="banner-caption">
          <h1>Smart Security</h1>
        </div>
      </div>

      <div>
        <SmartSecurityCard/>
      </div>
   </>
  )
}

export default SmartSecurity
