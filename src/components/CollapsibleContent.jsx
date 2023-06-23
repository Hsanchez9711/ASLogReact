import React from "react";
import Collapsible from "react-collapsible";
import warehouseIcon from "../images/distribution-center.png";
import flatbedIcon from "../images/container-3.png";
import locationIcon from "../images/location.png";
import ltlIcon from "../images/distribution-center-2.png";
import otrIcon from "../images/cargo-truck.png";
import documentsIcon from "../images/clipboard.png";

const CollapsibleContent = props => {
  // toggle collapse of specified content
  function toggleContent(content) {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  // collapse all open content
  function collapseAllOpenContent() {
    const colls = document.getElementsByClassName("Collapsible");
    for (const coll of colls) {
      if (coll.classList.contains("active")) {
        coll.classList.remove("active");
        toggleContent(coll.nextElementSibling);
      }
    }
  }

  const colls = document.getElementsByClassName("Collapsible");
  for (const coll of colls) {
    coll.addEventListener("click", function() {
      if (!this.classList.contains("active")) {
        collapseAllOpenContent();
      }
      this.classList.toggle("active");
      toggleContent(this.nextElementSibling);
    });
  }
};

export default CollapsibleContent;
