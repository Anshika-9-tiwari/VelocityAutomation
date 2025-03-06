
import React, { useState } from "react";
import "../CSS/nav.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdown, setDropdown] = useState(null);
 

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src="./public/assets/VelocityALogo1.png" alt="" width={200}/></div>
      <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        
        <li
          className="dropdown"
          onClick={() => toggleDropdown("solutions")}
          onMouseEnter={() => setDropdown("solutions")}
          onMouseLeave={() => setDropdown(null)}
        >
          <span>Solutions</span>
          {dropdown === "solutions" && (
            <ul className="dropdown-menu">
              <li><a href="people">People</a></li>
              <li><a href="machine">Machine</a></li>
              <li><a href="people">Business</a></li>
              <li><a href="quality">Quality</a></li>
              <li><a href="security">Security</a></li>
              <li><a href="machine">Material</a></li>
            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onClick={() => toggleDropdown("products")}
          onMouseEnter={() => setDropdown("products")}
          onMouseLeave={() => setDropdown(null)}
        >
          <span>Products</span>
          {dropdown === "products" && (
            <ul className="dropdown-menu">
              <li><a href="smartworker">Smart Worker</a></li>
              <li><a href="smartvision">Smart Vision</a></li>
              <li><a href="smartsecurity">Smart Security</a></li>
              <li><a href="smartmachine">Smart Machine</a></li>
            </ul>
          )}
        </li>

        <li>
          <a href="/smartfactory">Smart Factory</a>
        </li>

        <li
          className="dropdown"
          onClick={() => toggleDropdown("industries")}
          onMouseEnter={() => setDropdown("industries")}
          onMouseLeave={() => setDropdown(null)}
        >
          <span>Industries</span>
          {dropdown === "industries" && (
            <ul className="dropdown-menu">
              <li><a href="automotive">Automotive</a></li>
              <li><a href="manufacturing">Manufacturing</a></li>
              <li><a href="foodbeverages">Food & Beverages</a></li>
              <li><a href="warehouselogistics">Warehouse & Logistics</a></li>
              <li><a href="steel">Steel</a></li>
            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onClick={() => toggleDropdown("capabilities")}
          onMouseEnter={() => setDropdown("capabilities")}
          onMouseLeave={() => setDropdown(null)}
        >
          <span>Capabilities</span>
          {dropdown === "capabilities" && (
            <ul className="dropdown-menu">
              <li><a href="capabilities">Artificial Intelligence</a></li>
              <li><a href="capabilities">Computer Vision</a></li>
              <li><a href="capabilities">Data And Analytics</a></li>
              <li><a href="capabilities">Robotics</a></li>
              <li><a href="capabilities">IIOT</a></li>
              <li><a href="capabilities">Cloud Computing</a></li>
              <li><a href="capabilities">System Integration</a></li>
            </ul>
          )}
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? "✖" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;

