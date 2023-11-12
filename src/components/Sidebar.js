import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      className={`sidebar ${isSidebarActive ? "active" : ""}`}
      onMouseEnter={handleSidebarHover}
      onMouseLeave={handleSidebarLeave}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/techstack">TechStack</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/publications">Publications</Link>
        </li>
        <li>
          <Link to="/awards">Awards</Link>
        </li>
        <li>
          <Link to="/certificates">Certificates</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
