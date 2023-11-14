import React from 'react';
// import { Route, Router, Routes } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Awards from "./components/Awards";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Layout from './components/Layout';
import AppRoutes from '.components/AppRoutes';
// import Sidebar from './components/Sidebar';

function App() {

  return (
    <>
      <Layout/>
      <AppRoutes/>
    {/* <Layout/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/experience" Component={Experience}/>
        <Route exact path="/techstack" Component={TechStack} />
        <Route exact path="/projects" Component={Projects } />
        <Route exact path="/publications" Component={Publications } />
        <Route exact path="/awards" Component={Awards } />
        <Route exact path="/certificates" Component={Certificates} />
        <Route exact path="/contact" Component={Contact} />
      </Routes> */}
    </>
  );
}

export default App;
