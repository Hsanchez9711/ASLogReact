import React from "react";
// import infoTab from "./InfoTab";
import logo from "../images/LogoNoBGWhite.png";
import aboveLogo from "../images/frontcenter.png";
import slideshowImage1 from "../images/slideshow/adobe.jpeg";
import slideshowImage2 from "../images/slideshow/elPasoSkyline.jpg";
import mainBanner from "../images/mainBanner.png";
import servicesBanner from "../images/our-services.png";
import warehouseIcon from "../images/distribution-center.png";
import stockPhoto from "../images/semi-banner-v2.png";
import flatbedIcon from "../images/container-3.png";
import locationIcon from "../images/location.png";
import boxIcon from "../images/box.png";
import ltlIcon from "../images/distribution-center-2.png";
import otrIcon from "../images/cargo-truck.png";
import documentsIcon from "../images/clipboard.png";
import "../../src/Body.css";
import Collapsible from "react-collapsible";
import { Player } from "video-react";
import Movie from "../images/istockphoto-538845548-640_adpp_is.mp4";

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

        <img
          className="AS-logo"
          src={logo}
          alt="A.S. Logistics Corporation Logo in white"
        />
      </div>
      <div className="body">
        <div className="testing parallax">
          {/* <img
            className="mainBanner"
            src={stockPhoto}
            alt="Blue Semi-Truck driving east bound on highway"
          /> */}
        </div>
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
            <h1 className="servicesInfo"> Our Services </h1>
            <div className="icons-and-services">
              <img
                className="warehouse-icon icon"
                src={warehouseIcon}
                alt={"Blue icon of a semi truck and warehouse."}
              />
              <Collapsible trigger="Warehousing Services">
                <h5>
                  {" "}
                  This is some more placeholder information about our
                  warehousing services
                </h5>
              </Collapsible>
              <img
                className="otr-icon icon"
                src={otrIcon}
                alt={"Blue semi truck and trailer."}
              />
              <Collapsible trigger="Over the Road Transportation (OTR)">
                <h5>
                  {" "}
                  This is some more placeholder information about our OTR
                  services
                </h5>
              </Collapsible>

              <img
                className="ltl-icon icon"
                src={ltlIcon}
                alt={
                  "Smaller Semi truck parked in front of multiple warehouses."
                }
              />
              <Collapsible trigger="Less-Than-Truckload Breakdown">
                <h5>
                  {" "}
                  Less-Than-Truckload Breakdown more information needed here
                  please add it asap{" "}
                </h5>
              </Collapsible>

              <img
                className="documents-icon icon"
                src={documentsIcon}
                alt={
                  "Checklist with multiple checked boxes and documents alongside package."
                }
              />
              <Collapsible trigger="Clearance of Documents">
                <h5>
                  {" "}
                  Clearance of Documents add more information here please{" "}
                </h5>
              </Collapsible>
              <img
                className="flatbed-icon icon"
                src={flatbedIcon}
                alt={"Single container being hoisted by crane."}
              />
              <Collapsible trigger="Flatbed Trailer Services">
                <h5>
                  {" "}
                  Flatbed Trailer Services more informatiuon needed here please
                  add it
                </h5>
              </Collapsible>
              <img
                className="local-drayage-icon icon"
                src={locationIcon}
                alt={"Location marker with home at the center of the pinpoint."}
              />
              <Collapsible trigger="Local Drayage Services">
                <h5>
                  {" "}
                  Local Drayage Services add more information in this dropdown{" "}
                </h5>
              </Collapsible>
            </div>
          </div>
          <div className="servicesMural">
            <img
              className="servicesBanner"
              src={servicesBanner}
              alt="Parked Semi-Trucks in a truck-lot"
            />
          </div>
          <Player autoPlay={true}>
            <source src={Movie} />
          </Player>
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
