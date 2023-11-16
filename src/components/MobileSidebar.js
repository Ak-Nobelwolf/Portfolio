// MobileSidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBriefcase, faCode, faProjectDiagram, faNewspaper, faAward, faCertificate } from '@fortawesome/free-solid-svg-icons';
import "../styles/MobileSidebar.css";

function MobileSidebar() {
    console.log("MobileSidebar component rendering...");
  const [isSidebarActive, setSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarActive(!isSidebarActive);
  };

  return (
    <div className={`mobile-sidebar${isSidebarActive ? " active" : ""}`}>
      <button className="toggle-button" onClick={handleSidebarToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <ul>
        <li>
          <NavLink to="/" activeclassName="active-link">
            <FontAwesomeIcon icon={faHome} color="black" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" activeclassName="active-link">
            <FontAwesomeIcon icon={faBriefcase} color="black" /> Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/techstack" activeclassName="active-link">
            <FontAwesomeIcon icon={faCode} color="black" /> TechStack
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeclassName="active-link">
            <FontAwesomeIcon icon={faProjectDiagram} color="black" /> Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/publications" activeclassName="active-link">
            <FontAwesomeIcon icon={faNewspaper} color="black" /> Publications
          </NavLink>
        </li>
        <li>
          <NavLink to="/awards" activeclassName="active-link">
            <FontAwesomeIcon icon={faAward} color="black" /> Awards
          </NavLink>
        </li>
        <li>
          <NavLink to="/certificates" activeclassName="active-link">
            <FontAwesomeIcon icon={faCertificate} color="black" /> Certificates
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassName="active-link">
            <FontAwesomeIcon icon={faEnvelope} color="black" /> Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileSidebar;
