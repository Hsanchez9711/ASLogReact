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
    <div className="firstPage">
      <div className="Header">
        <MobileNavBar />
        <div className="desktop-header-buttons">
          <a href="#about-us-section">
            <button className="aboutBtn" type="button" href="#about-us-section">
              <b>About Us</b>
            </button>
          </a>
          <a href="#services-section">
            <button
              className="servicesBtn"
              type="button"
              href="#services-section"
            >
              <b>Our Services</b>
            </button>
          </a>
          <a href="#contact-section">
            <button
              className="contactBtn"
              type="button"
              href="#contact-section"
            >
              <b>Contact Us</b>
            </button>
          </a>
          <div className="logo-container">
            <img
              className="AS-logo"
              src={logo}
              alt="A.S. Logistics Corporation Logo in white"
            />
          </div>
        </div>
      </div>
      <div className="body">
        <div className="testing parallax" />
        <div className="greetingBox">
          {" "}
          <h3 className="main-greeting-text">
            <b>Welcome to A.S. Logistic Corporation</b>
          </h3>
          <h6 className="sub-greeting-text">
            Where On Time Delivery is{" "}
            <i>
              <b>always </b>
            </i>
            our priority
          </h6>
        </div>
        <div className="our-motto">
          <h1>
            <b>Our Promise To Our Customers</b>
          </h1>
          <h3>
            Here at A.S. Logistics Corporation we consistently strive to provide
            unparalleled customer service and competitive pricing while never
            dismissing our motto: "On time delivery is always our priority".
            Despite our emphasis on timely delivery, we never compromise on
            safety or efficiency thanks to our highly-skilled driving teams,
            staff, and cutting-edge technology and equipment. So next time you
            are considering freight delivery consider A.S Logistic Corporation
            as your first choice!
          </h3>
          <img
            className="as-logo-shield"
            src={asLogoShield}
            alt="A.S. Logistics logo with shield background"
          />
        </div>
        <div className="our-services">
          <div className="servicesIcons">
            <div className="servicesMural">
              <div
                className="testing parallax-two servicesBanner"
                id="services-section"
              />
              <div className="icons-and-services">
                <h1 className="our-services-title">
                  <b> Our Services </b>{" "}
                </h1>
                <Tabs />
              </div>
            </div>
          </div>
          <ContactForm />
          <AboutUs id="about-us-section" />
        </div>
      </div>
    </div>
  );
};

export default Body;
