import React from "react";
import logo from "../images/LogoNoBGWhite.png";

const MobileNavBar = () => {
  return (
    <nav>
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="logo">
            <img
              className="AS-logo"
              src={logo}
              alt="A.S. Logistics Corporation Logo in white"
            />
          </div>
          <div class="menu-items">
            <li>
              <a href="#about-us-section">About Us</a>
            </li>
            <li>
              <a href="#services-section">Our Services</a>
            </li>
            <li>
              <a href="#contact-section">Contact Us</a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
