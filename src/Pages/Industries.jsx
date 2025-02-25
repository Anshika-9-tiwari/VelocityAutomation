import React from 'react'
import '../CSS/pages.css'
import '../CSS/IndustriesPages.css'
import ContactImp from '../Components/ContactImp'


function Industries() {
  return (
    <>
      <div className="banner">
        <img src='./public/assets/industrybanner.jpeg' alt='' className="banner-image" /> 
        <div className="banner-caption">
          <h1>Automotive Industry</h1>
          <p style={{margin:'1.7em 0em '}}>Driving Innovation, Powering Performance</p>
        </div>
      </div>  
      <div className='industries-container'>
        <div className='industries-overview'>
          <h1>Overview</h1>
          <div className='Overview-paragraph1'>
            <p style={{marginLeft:'1em'}}>
              The Automotive industry is a vital sector that encompasses the design, development, production, and sale of motor vehicles, including cars,  trucks, buses, motorcycles, and other automobiles.
            </p>
          </div>
          <div className='Overview-paragraph2'>
            <p>
              Artificial Intelligence (AI) has emerged as a transformative technology in the automotive industry, revolutionizing the way products are  designed, produced, and maintained. AI’s integration into automotive processes has led to increased efficiency, improved product quality, and  enhanced decision-making.
            </p>
            <p>
              Adopting our IT solutions empowers automotive manufacturers to remain competitive, respond to market demands faster, improve product quality, and ultimately drive innovation within the industry.
            </p>
          </div>
        </div>

         <div className="container" style={{backgroundColor:'#fafdfd'}}>
          <div className="image-container">
            <img
              src="./public/assets/PPEMonitoring.png"
              alt="Descriptive Alt Text"
              className="responsive-image"
            />
          </div>
          <div className="text-container">
            <h1 >Machine Utilization & Productivity</h1>
            <p className="paragraph">
              Machine monitoring in the manufacturing industry enables the practice of tracking and analyzing the performance, health, and utilization of machinery and equipment used in the production process. Our AI solution plays a crucial role in optimizing production efficiency, reducing downtime, ensuring product quality, and ultimately improving the overall competitiveness of a manufacturing operation.
            </p>
            <p className="paragraph">
              This is the second paragraph. Add more text as needed.  Remember to keep your content concise and engaging for your users.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="text-container">
            <h1>Condition Based Monitoring</h1>
            <p className="paragraph">
              Condition-based monitoring (CBM), a proactive maintenance strategy is widely used in the manufacturing industry to maximize equipment reliability, minimize downtime, and reduce maintenance costs. Our CBM solution involves monitoring the condition of machinery and equipment in real-time or at regular intervals to detect early signs of potential issues or degradation.
            </p>
            <p className="paragraph">
              This data-driven approach allows manufacturers to schedule maintenance activities only when necessary, rather than on a fixed schedule, which can lead to unnecessary downtime and expenses.
            </p>
          </div>
          <div className="image-container">
            <img
              src="./public/assets/machineMonitoring.jpg"
              alt="Descriptive Alt Text"
              className="responsive-image"
            />
          </div>
        </div>
        <div style={{backgroundColor:'#fafdfd'}} className="container">
          <div className="image-container">
            <img
              src="./public/assets/EnergyMonitoring .jpg"
              alt="Descriptive Alt Text"
              className="responsive-image"
            />
          </div>
          <div className="text-container">
            <h1>Energy Monitoring</h1>
            <p className="paragraph">
              Energy monitoring in the manufacturing industry is a crucial aspect of sustainability and cost management. It involves the systematic measurement, analysis, and management of energy consumption and efficiency within manufacturing processes. Our comprehensive and intelligent platform is designed to provide organizations with real-time insights into their energy consumption and usage patterns.
            </p>
            <p className="paragraph">
              By leveraging advanced technologies, data analytics, and smart algorithms, our solution empowers businesses to optimize energy efficiency, reduce costs, and enhance sustainability efforts.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="text-container">
            <h1>Smart Quality Inspection</h1>
            <p className="paragraph">
              Smart quality inspection in the manufacturing industry involves the use of advanced technologies and data-driven approaches to ensure the quality and consistency of products throughout the production process. This approach aims to minimize defects, reduce waste, and improve overall efficiency.
            </p>
            <p className="paragraph">
              By integrating AI-driven solutions, automotive manufacturers can achieve unparalleled levels of precision, consistency, and compliance while optimizing production workflows.
            </p>
          </div>
          <div className="image-container">
            <img
              src="./public/assets/IndusFac.jpg"
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

export default Industries
