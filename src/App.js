import React from "react";
// import { Route, Router, Routes } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Awards from "./components/Awards";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
// import AppRoutes from "./components/AppRoutes";
// import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Layout />
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
