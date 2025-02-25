import React from 'react';
import '../CSS/SmartCard.css'

const SmartCard = ({ image, title }) => {
  return (
     
      <div className="smartcard">
        <img src={image} alt={title} className="card-image" />
        <div className="smartcard-content">
          <h5 className="smartcard-title">{title}</h5>
        </div>
      </div>
    
  );
};

export default SmartCard;