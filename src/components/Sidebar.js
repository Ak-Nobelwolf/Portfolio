import React, { useState } from 'react';
import '../styles/Sidebar.css';

function Sidebar({ onLinkClick }) {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const handleSidebarHover = () => {
    setSidebarActive(true);
  };

  const handleSidebarLeave = () => {
    setSidebarActive(false);
  };

  return (
    <div className={`sidebar ${isSidebarActive ? "active" : ""}`}
    onMouseEnter={handleSidebarHover}
    onMouseLeave={handleSidebarLeave}>
      <ul>
        <li onClick={() => onLinkClick('landing')}>Home</li>
        <li onClick={() => onLinkClick('experience')}>Experience</li>
        <li onClick={() => onLinkClick('techstack')}>TechStack</li>
        <li onClick={() => onLinkClick('projects')}>Projects</li>
        <li onClick={() => onLinkClick('publications')}>Publications</li>
        <li onClick={() => onLinkClick('awards')}>Awards</li>
        <li onClick={() => onLinkClick('certificates')}>Certificates</li>
        <li onClick={() => onLinkClick('contact')}>Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;
