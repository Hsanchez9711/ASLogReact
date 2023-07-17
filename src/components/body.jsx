import React from "react";
// import infoTab from "./InfoTab";
import logo from "../images/LogoNoBGWhite.png";
import servicesBanner from "../images/parked-semis.jpg";
import warehouseIcon from "../images/distribution-center.png";
import flatbedIcon from "../images/container-3.png";
import locationIcon from "../images/location.png";
import ltlIcon from "../images/distribution-center-2.png";
import otrIcon from "../images/cargo-truck.png";
import documentsIcon from "../images/clipboard.png";
import asLogoShield from "../images/revisedlogo.png";
import "../../src/Body.css";
import Collapsible from "react-collapsible";
import Tabs from "./Tabs.jsx";
// import Movie from "../images/istockphoto-538845548-640_adpp_is.mp4";
import ContactForm from "./ContactForm.jsx";

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
        <button className="homeBtn" type="button">
          <b>Home</b>
        </button>
        <button className="aboutBtn" type="button">
          <b>About Us</b>
        </button>
        <button className="servicesBtn" type="button">
          <b>Our Services</b>
        </button>
        <button className="contactBtn" type="button">
          <b>Contact Us</b>
        </button>
        <div className="logo-container">
          <img
            className="AS-logo"
            src={logo}
            alt="A.S. Logistics Corporation Logo in white"
          />
        </div>
      </div>
      <div className="body">
        <div className="testing parallax" />
        <div className="greetingBox">
          {" "}
          <h3>
            <b>Welcome to A.S. Logistic Corporation</b>
          </h3>
          <h6>
            Where On Time Delivery is{" "}
            <i>
              <b>always </b>
            </i>
            our priority
          </h6>
        </div>
        <div className="our-motto">
          <img
            className="as-logo-shield"
            src={asLogoShield}
            alt="A.S. Logistics logo with shield background"
          />
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
        </div>

        <div className="our-services">
          <div className="servicesIcons">
            <div className="servicesMural">
              <div className="testing parallax-two servicesBanner" />

              <div className="icons-and-services">
                <h1 className="our-services-title">
                  <b> Our Services </b>{" "}
                </h1>
                <Tabs />
              </div>
            </div>

            {/*  */}
          </div>

          {/* <Player autoPlay={true}>
            <source src={Movie} />
          </Player> */}
          <ContactForm></ContactForm>
        </div>
      </div>

      {/* <div className="infoCard">
              <div className="context">
                <p>hello this is some context within the card</p>
              </div>
            </div> */}
    </div>
  );
};

export default Body;
