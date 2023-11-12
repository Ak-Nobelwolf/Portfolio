import React, { useState } from 'react';
import Landing from './components/Landing';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing />;
      case 'experience':
        return <Experience />;
      case 'techstack':
        return <TechStack />;
      case 'projects':
        return <Projects />;
      case 'publications':
        return <Publications />;
      case 'awards':
        return <Awards />;
      case 'certificates':
        return <Certificates />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  const handleLinkClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <Sidebar onLinkClick={handleLinkClick} />
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
