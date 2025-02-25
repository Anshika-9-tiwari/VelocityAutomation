import React from 'react';
import '../CSS/CompanyLogos.css'

const CompanyLogos = () => {
  const companies = [
    './public/assets/pprm-logo.png',
    './public/assets/Varun-Beverages.png',
    './public/assets/ALP-LOGO.png',
    './public/assets/fortune-logo.png',
    './public/assets/sambhv-logo.png',
   
    './public/assets/YETIBrewery-logo.png',
    './public/assets/Esskay-logo.jpg',
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