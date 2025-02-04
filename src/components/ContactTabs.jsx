import React, { useState } from "react";


import "./Tabs.css";

// Tab component
const Tab = ({ title, className, content, isOpen, toggleTab, icon, altText }) => {
  return (
    <div className="contact-tab">
      <img
        className={className}
        src={icon}
        alt={altText}
      />
      <h1 className="contact-header" onClick={toggleTab}>
        {title}
      </h1>
      {isOpen && <h6 className="contact-content">{content}</h6>}
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
    <div className="contact-tabs-container">
      <ul>
        <Tab
          title="Ada Sanchez - President"
          content="Safely stow cargo in our 24-hour monitored and secure 
          yard for as as long as you need."
          isOpen={openTab === 1}
          toggleTab={() => handleTabClick(1)}
          icon={warehouseIcon}
          altText=""
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
