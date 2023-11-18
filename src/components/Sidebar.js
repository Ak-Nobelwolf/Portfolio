// Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBriefcase, faCode, faProjectDiagram, faNewspaper, faAward, faCertificate } from '@fortawesome/free-solid-svg-icons';
import "../styles/Sidebar.css";

function Sidebar() {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const handleSidebarHover = () => {
    setSidebarActive(true);
  };

  const handleSidebarLeave = () => {
    setSidebarActive(false);
  };

  return (
    <div
      className={`sidebar${isSidebarActive ? " active" : ""}`}
      onMouseEnter={handleSidebarHover}
      onMouseLeave={handleSidebarLeave}
    >
      <ul>
        <li>
          <NavLink to="/" activeClassName="active-link">
            <FontAwesomeIcon icon={faHome} color="black" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" activeClassName="active-link">
            <FontAwesomeIcon icon={faBriefcase} color="Black" /> Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/techstack" activeClassName="active-link">
            <FontAwesomeIcon icon={faCode} color="black" /> TechStack
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active-link">
            <FontAwesomeIcon icon={faProjectDiagram} color="black" /> Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/publications" activeClassName="active-link">
            <FontAwesomeIcon icon={faNewspaper} color="black" /> Publications
          </NavLink>
        </li>
        <li>
          <NavLink to="/awards" activeClassName="active-link">
            <FontAwesomeIcon icon={faAward} color="black" /> Awards
          </NavLink>
        </li>
        <li>
          <NavLink to="/certificates" activeClassName="active-link">
            <FontAwesomeIcon icon={faCertificate} color="black" /> Certificates
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            <FontAwesomeIcon icon={faEnvelope} color="black" /> Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
