// Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
          <NavLink to="/" activeClassName="active-link" exact>
            <FontAwesomeIcon icon={faHome} color="white" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" activeClassName="active-link">
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/techstack" activeClassName="active-link">
            TechStack
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active-link">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/publications" activeClassName="active-link">
            Publications
          </NavLink>
        </li>
        <li>
          <NavLink to="/awards" activeClassName="active-link">
            Awards
          </NavLink>
        </li>
        <li>
          <NavLink to="/certificates" activeClassName="active-link">
            Certificates
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            <FontAwesomeIcon icon={faEnvelope} color="white" /> Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
