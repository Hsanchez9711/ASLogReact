import React, { useState } from "react";
import warehouseIcon from "../images/distribution-center.png";
import flatbedIcon from "../images/container-3.png";
import locationIcon from "../images/location.png";
import ltlIcon from "../images/distribution-center-2.png";
import otrIcon from "../images/cargo-truck.png";
import documentsIcon from "../images/clipboard.png";
import "./Tabs.css";

// Tab component
const Tab = ({ title, content, isOpen, toggleTab, icon }) => {
  return (
    <div className="services-tab">
      <img
        className="icon"
        src={icon}
        alt={"Blue icon of a semi truck and warehouse."}
      />
      <h1 className="tab-header" onClick={toggleTab}>
        {title}
      </h1>
      {isOpen && <h3 className="tab-content">{content}</h3>}
    </div>
  );
};

// Tabs component
const ContactTabs = () => {
  const [openTab, setOpenTab] = useState(null);

  const handleTabClick = tabIndex => {
    setOpenTab(prevOpenTab => (prevOpenTab === tabIndex ? null : tabIndex));
  };

  return (
    <div className="tabs-container">
      <ul>
        <Tab
          title="Warehousing Services"
          content="Safely stow cargo in our 24-hour monitored and secure 
          yard for as as long as you need."
          isOpen={openTab === 1}
          toggleTab={() => handleTabClick(1)}
          icon={warehouseIcon}
        />
        <Tab
          title="Over the Road Transportation (OTR)"
          content="Move freight from just about anywhere in the nation using our extensive Over-the-Road transport expertise and tracking services."
          isOpen={openTab === 2}
          toggleTab={() => handleTabClick(2)}
          icon={otrIcon}
        />
        <Tab
          title="Less-Than-Truckload (LTL) Breakdown"
          content="For those smaller
          truckloads, cargo breakdown and individual shipments of breakdown are made easy."
          isOpen={openTab === 3}
          toggleTab={() => handleTabClick(3)}
          icon={ltlIcon}
        />
        <Tab
          title="Clearance of Documents"
          content="Import and export clearance, Mexican Customs clearance, and bonded warehouse availability"
          isOpen={openTab === 4}
          toggleTab={() => handleTabClick(4)}
          icon={documentsIcon}
        />
        <Tab
          title="Flatbed Trailer Services"
          content=" For that cargo where a container simply won't cut it, our 
          flat-bed trailers and highly-experienced crew can be the perfect solution!"
          isOpen={openTab === 5}
          toggleTab={() => handleTabClick(5)}
          icon={flatbedIcon}
        />
        <Tab
          title="Local Drayage Services"
          content="Efficiently transport and deliver freight locally and regionally, including pickups from Union Pacific Railroad and local airports."
          isOpen={openTab === 6}
          toggleTab={() => handleTabClick(6)}
          icon={locationIcon}
        />
      </ul>
      {/* Add more tabs as needed */}
    </div>
  );
};

export default ContactTabs;
