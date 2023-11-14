import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Landing";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Awards from "./components/Awards";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default App;
