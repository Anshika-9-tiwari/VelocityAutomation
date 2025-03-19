import React from 'react';
import '../CSS/CompanyLogos.css'

const CompanyLogos = () => {
  const companies = [
    './public/assets/pprm-Logo.png',
    './public/assets/VarunBeverages.png',
    './public/assets/ALP-Logo.png',
    './public/assets/Fortune-logo.png',
    './public/assets/Sambhv-logo.png',
    './public/assets/YETIBrewery-Logo.png',
    './public/assets/Esskay-Logo.jpg',
  ];

  return (
    <div className="logo-container">
      {companies.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Company Logo ${index + 1}`}
          className="logo1"
        />
      ))}
    </div>
  );
};

export default CompanyLogos;