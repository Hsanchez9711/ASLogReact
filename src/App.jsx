import React from "react";
import infoTab from "./InfoTab";
import logo from "./images/ASLLOGO.PNG";
import aboveLogo from "./images/frontcenter.png";
import slideshowImage1 from "./images/slideshow/adobe.jpeg";
import slideshowImage2 from "./images/slideshow/elPasoSkyline.jpg";
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

        <img className="AS-logo" src={logo} alt="ASLogisticsLogo" />
      </div>
      <div className="body">
        <div className="slideshow">
          {images.map((each, index) => (
            <img
              key={index}
              style={{ height: "100%", width: "100%" }}
              src={each}
              alt="parked-semis"
            />
          ))}
        </div>
      </div>
      <div className="greetingBox">
        {" "}
        <h3>Welcome to A.S. Logistic Corporation</h3>
        <h6>
          Where On Time Delivery is{" "}
          <i>
            <b>always </b>
          </i>
          our priority
          <infoTab data="this is the tab"></infoTab>
        </h6>
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
