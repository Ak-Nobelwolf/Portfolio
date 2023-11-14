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
    </>
  );
}

export default App;
