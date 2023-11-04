import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
