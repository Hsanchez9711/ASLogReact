import React, { useState } from "react";
import "./Tabs.css";

// Tab component
const Tab = ({ title, content, isOpen, toggleTab }) => {
  return (
    <div className="tab">
      <h1 className="tab-header" onClick={toggleTab}>
        {title}
      </h1>
      {isOpen && <h3 className="tab-content">{content}</h3>}
    </div>
  );
};

// Tabs component
const Tabs = () => {
  const [openTab, setOpenTab] = useState(null);

  const handleTabClick = tabIndex => {
    setOpenTab(prevOpenTab => (prevOpenTab === tabIndex ? null : tabIndex));
  };

  return (
    <div className="tabs-container">
      <ul>
        <Tab
          title="Warehousing Services"
          content="Content for Tab 1"
          isOpen={openTab === 1}
          toggleTab={() => handleTabClick(1)}
        />
        <Tab
          title="Over the Road Transportation (OTR)"
          content="Content for Tab 2"
          isOpen={openTab === 2}
          toggleTab={() => handleTabClick(2)}
        />
        <Tab
          title="Less-Than-Truckload (LTL) Breakdown"
          content="Content for Tab 2"
          isOpen={openTab === 3}
          toggleTab={() => handleTabClick(3)}
        />
        <Tab
          title="Clearance of Documents"
          content="Content for Tab 2"
          isOpen={openTab === 4}
          toggleTab={() => handleTabClick(4)}
        />
        <Tab
          title="Flatbed Trailer Services"
          content="Content for Tab 2"
          isOpen={openTab === 5}
          toggleTab={() => handleTabClick(5)}
        />
        <Tab
          title="Local Drayage Services"
          content="Content for Tab 2"
          isOpen={openTab === 6}
          toggleTab={() => handleTabClick(6)}
        />
      </ul>
      {/* Add more tabs as needed */}
    </div>
  );
};

export default Tabs;
