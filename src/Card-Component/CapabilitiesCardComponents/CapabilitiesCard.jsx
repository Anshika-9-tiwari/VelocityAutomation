import React from 'react'

const CapabilitiesCard = ({ image, title }) => {

  return (
       
       <div className='capability-item  bg-white  shadow-lg'>
         <img src={image} alt={title} />
          <div className='capability-item-h3'>
            <h5 className='text-center p-1 mt-1'>{title}</h5>
          </div>
        </div>
  )
}

export default CapabilitiesCard
