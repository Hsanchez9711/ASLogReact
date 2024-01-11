import React from "react";
import logo from "../images/LogoNoBGWhite.png";
import servicesBanner from "../images/parked-semis.jpg";
import asLogoShield from "../images/revisedlogo.png";
import "../../src/Body.css";
import Tabs from "./Tabs.jsx";
import ContactForm from "./ContactForm.jsx";
import AboutUs from "./AboutUs.jsx";
import MobileNavBar from "./MobileNavBar";

function toggleTab(tabNumber) {
  const content = document.getElementById(`tab-content-${tabNumber}`);
  const allContents = document.querySelectorAll(".tab-content");

  allContents.forEach(tabContent => {
    if (tabContent !== content) {
      tabContent.style.display = "none";
    }
  });

  content.style.display = content.style.display === "none" ? "block" : "none";
}

const Body = props => {
  return (
    <div className="main-page">
      <div className="header-container">
        <MobileNavBar />
        <header>
          <nav class="left-buttons">
            <a href="#about-us-section">About Us</a>
            <a href="#services-section">Our Services</a>
            <a href="#contact-section">Contact Us</a>
          </nav>
          <div class="centered-logo">
            <img src={logo} alt="Logo" />
          </div>
        </header>
      </div>

      <div className="main-greeting-img">
        <div className="greeting-img parallax" />
        <div className="greeting-box">
          {" "}
          <h4 className="sub-greeting-text">
            Where On Time Delivery is{" "}
            <i>
              <b>always </b>
            </i>
            our priority
          </h4>
        </div>
      </div>

      <div className="our-motto">
        <h1>
          <b>Our Promise To Our Customers</b>
        </h1>
        <h3>
          Here at A.S. Logistics Corporation we consistently strive to provide
          unparalleled customer service and competitive pricing while never
          dismissing our motto: "On time delivery is always our priority".
          Despite our emphasis on timely delivery, we never compromise on safety
          or efficiency thanks to our highly-skilled driving teams, staff, and
          cutting-edge technology and equipment. So next time you are
          considering freight delivery consider A.S Logistic Corporation as your
          first choice!
        </h3>
        <img
          className="as-logo-shield"
          src={asLogoShield}
          alt="A.S. Logistics logo with shield background"
        />
      </div>

      <div className="our-services">
        <div className="services-icons">
          <div className="services-mural">
            <div
              className="testing parallax-two servicesBanner"
              id="services-section"
            />
            <div className="icons-and-services-list">
              <h1 className="our-services-title">
                <b> Our Services </b>{" "}
              </h1>
              <Tabs />
            </div>
          </div>
        </div>
      </div>

      <AboutUs />
      <ContactForm className="background-img" />
    </div>
  );
};

export default Body;
