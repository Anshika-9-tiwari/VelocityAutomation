import React from 'react'
import {Link} from 'react-router-dom'


    const IndustryCardList
   = () => {
      return (
        <>        
          <span> <h1 className='p-4  m-3'>Industries</h1></span>
          <div className="card-container gap-3 flex-wrap" style={{display:'flex', margin:'0em 2em 3em 2em',padding:'10px'}}>
            <div className=" border rounded-lg shadow-lg p-4 ">
              <div className="card">
                  <Link to="automotive" style={{textDecoration:'none'}}>
                    <img src="./public/assets/Robotics.jpeg" alt="title" className="card-image-top" />
                    <div className="card-body">
                      <h2 className="card-title">Automotive</h2>
                      <p className="card-text">Driving Innovation, Powering Performance</p>
                    </div>
                  </Link>
             </div>
            </div>
            <div className=" border rounded-lg shadow-lg p-4 ">
              <div className="card">
                  <Link to="manufacturing" style={{textDecoration:'none'}}>
                    <img src="./public/assets/manuf-indus.jpeg" alt="title" className="card-image-top" />
                    <div className="card-body">
                      <h2 className="card-title">Manufacturing</h2>
                      <p className="card-text">Smart Manufacturing : Powered by Advanced AI Solutions</p>
                    </div>
                  </Link>
             </div>
            </div>
            <div className=" border rounded-lg shadow-lg p-4 ">
              <div className="card">
                  <Link to="foodbeverages" style={{textDecoration:'none'}}>
                    <img src="./public/assets/img2.jpg" alt="title" className="card-image-top" />
                    <div className="card-body">
                      <h2 className="card-title">Food & Beverages</h2>
                      <p className="card-text">Smart Taste, Savvy Choices: AI Revolutionizing Food and Beverages</p>
                    </div>
                  </Link>
             </div>
            </div>
            <div className=" border rounded-lg shadow-lg p-4 ">
              <div className="card">
                  <Link to="warehouselogistics" style={{textDecoration:'none'}}>
                    <img src="./public/assets/Warehouse.jpeg" alt="title" className="card-image-top" />
                    <div className="card-body">
                      <h2 className="card-title">Warehouse & Logistics</h2>
                      <p className="card-text">AI-Powered Warehouse and Logistics: Streamlining supply chains, accelerating success</p>
                    </div>
                  </Link>
             </div>
            </div>
          </div>
      </>

      );
    };


export default IndustryCardList;
