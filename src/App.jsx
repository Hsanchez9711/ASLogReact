import React from "react";
import infoTab from "./InfoTab";
import logo from "./images/ASLLOGO.PNG";
import aboveLogo from "./images/frontcenter.png";
import slideshowImage1 from "./images/slideshow/adobe.jpeg";
import slideshowImage2 from "./images/slideshow/elPasoSkyline.jpg";
import mainBanner from "./images/mainBanner.png";
import servicesBanner from "./images/our-services.png";
import "./App.css";

const images = [slideshowImage1];

//const button handling function here

// TODO here make a modularized info box that we can reuse throughout the site

// eslint-disable-next-line
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};
const ShowSlideshow = () => {
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

        <img
          className="AS-logo"
          src={logo}
          alt="A.S. Logistics Corporation Logo in white"
        />
      </div>
      <div className="body">
        <img
          className="mainBanner"
          src={mainBanner}
          alt="Blue Semi-Truck driving east bound on highway"
        />
        {/* <div class="greeting">Bottom Left</div> */}
        <div className="greetingBox">
          {" "}
          <h3>Welcome to A.S. Logistic Corporation</h3>
          <h6>
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
        </div>

        <div className="our-services">
          <img
            className="servicesBanner"
            src={servicesBanner}
            alt="Parked Semi-Trucks in a truck-lot"
          />
          <h3> </h3>
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

function App() {
  return (
    <div className="App">
      <div className="slideshow-container">
        <ShowSlideshow />
      </div>
    </div>
  );
}

export default App;
