import React from 'react'
import { Carousel } from 'react-bootstrap';
import CompanyLogos from '../Components/CompanyLogos';
import Solutions from './Solutions';
import CapabilityHomeCardList from '../Card-Component/CapabilitiesCardComponents/CapabilityHomeCardList';
import IndustryCardList from '../Card-Component/IndustryCardList';

function Home() {
  return (
    <>
      <div className='Container'>
          <div className='carousel-container'>
            <Carousel>
              <Carousel.Item>
                <img src="./public/assets/Banner22.jpg" alt="" width={1300} height={450}  />
                <Carousel.Caption>
                    <h1 className='caption-h1'>INDUSTRIAL AUTOMATION & <br/>AUTOMATION SERVICE</h1>
                    <p className='caption-p1 '>
                        Transforming Infinite Possibilities into <br /> Products & Solutions
                    </p>
                    
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="./public/assets/Banner11.jpg" alt="" width={1300} height={450}  />
                <Carousel.Caption>
                    <h1 className='caption-h1'>INDUSTRIAL AUTOMATION & <br/>AUTOMATION SERVICE</h1>
                    <p className='caption-p1 '>
                        Transforming Infinite Possibilities into <br /> Products & Solutions
                    </p>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="./public/assets/Banner22.jpg" alt="" width={1300} height={450}  />
                <Carousel.Caption>
                    <h1 className='caption-h1'>INDUSTRIAL AUTOMATION & <br/>AUTOMATION SERVICE</h1>
                    <p className='caption-p1'>
                        Transforming Infinite Possibilities into <br /> Products & Solutions
                    </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>  


          {/* CompanyLogos */}
          <div className="SiteLogo">
            <h1>Our Clients</h1>
            <CompanyLogos />
          </div>  

          {/* Solutions */}
          <div >
              <Solutions/>
          </div>

          {/* Capabilities */}
          <div>
            < CapabilityHomeCardList/>
          </div>

          {/* Industries */}
          <div><IndustryCardList/></div>
          
          {/* Choosen us */}
          <div className='choosen-box1 '>
            <div className='item-choosen1'>
                <img src="./public/assets/Robotics-Img.jpeg" width={530} height={300} alt="" style={{borderRadius:'18px', marginBottom:'1em'}}/>
            </div>
            <div className=' item-choosen2'>
              <h1>Industry  Redefined</h1>
              <p>
                Velocity Automation is a leading technology company focused on delivering cutting-edge solutions and services that empower    businesses to prosper in the digital era of Industry.
              </p>
            </div>
          </div>
          <div className='choosen-box2 '>
            <div className=' item-choosen2 mt-5'>
              <h3>Your Partner in Achieving Growth Through Digital Transformation</h3>
              <p>
                We support businesses in effectively managing digital transformation initiatives and achieving tangible growth by harnessing the   collective strength of our experience and extensive network of expertise.
              </p>
            </div>
            <div className='item-choosen1' style={{marginRight:'0.2em', borderRadius:'18px 0px'}}>
                <img src="./public/assets/PLC_SCADA.jpeg" width={530} height={300} alt="" style={{borderRadius:'18px 0px', marginTop:'1em'}}/>
            </div>
          </div>
      </div>  
    </>
  )
}

export default Home
