import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Landing />
        {/* <Header />
        <Profile />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Awards />
        <Certificates />
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
