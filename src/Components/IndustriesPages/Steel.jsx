import React from 'react'
import ContactImp from '../ContactImp'

const Steel = () => {
  return (
    <>
      <div className="banner">
        <img src='./public/assets/industrybanner.jpeg' alt='' className="banner-image" /> 
        <div className="banner-caption">
          <h1>Steel Industry</h1>
          <p style={{margin:'1.7em 0em '}}>AI Steeling the Way: Revolutionizing the Metal Industry with Cutting Edge Technology</p>
        </div>
      </div>  

      <div className='industries-container'>
        <div className='industries-overview'>
          <h1>Overview</h1>
          <div className='Overview-paragraph1'>
            <p style={{marginLeft:'1em'}}>
              The steel industry, known for its strength and durability, is embracing a new era of transformation fueled by artificial intelligence (AI) solutions. In an age where digital innovation permeates every sector, AI is revolutionizing the way steel is produced, processed, and utilized. From streamlining production processes to optimizing supply chains, AI is breathing new life into the traditional steel industry.
            </p>
          </div>
          <div className='Overview-paragraph2'>
            <p>
              AI solutions in the steel industry encompass a wide range of technologies, including machine learning, data analytics, robotics, and IoT (Internet of Things). These cutting-edge tools empower manufacturers and stakeholders with actionable insights, predictive capabilities, and improved operational efficiency. By harnessing the power of AI, the steel industry is unlocking untapped potential, driving unprecedented productivity, and staying ahead in an ever-evolving market.
            </p>
          </div>
        </div>

        <div className="container" style={{backgroundColor:'#fafdfd'}}>
          <div className="image-container">
            <img
              src="./public/assets/SteelPlants.jpeg"
              alt="Descriptive Alt Text"
              className="responsive-image"
            />
          </div>
          <div className="text-container">
            <h1 >Workforce Planning & Scheduling</h1>
            <p className="paragraph">
              Workforce planning and scheduling powered by artificial intelligence (AI) has revolutionized how businesses manage their human resources, ensuring optimal efficiency, cost savings, and employee satisfaction. This advanced approach leverages AI algorithms and data-driven insights to make informed decisions about workforce deployment, shift allocation, and resource optimization
            </p>
          </div>
        </div>
        <div className="container">
          <div className="text-container">
            <h1>Smart Quality Inspection</h1>
            <p className="paragraph">
              Smart quality inspection in the steel industry is a critical process that involves the use of advanced technologies and automation to ensure the quality and integrity of steel products. Steel is a fundamental material used in various industries, including construction, automotive, aerospace, and manufacturing. Maintaining high-quality standards is essential to ensure the safety and reliability of steel products.
            </p>
          </div>
          <div className="image-container">
            <img
              src="./public/assets/PLCSCADA.jpeg"
              alt="Descriptive Alt Text"
              className="responsive-image"
            />
          </div>
        </div>

        {/* Contcat */}
        <div>
          <ContactImp/>
        </div>
      </div>
    </>
  )
}

export default Steel
