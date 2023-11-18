import React from "react";
import AppRoutes from './AppRoutes';
import '../styles/Layout.css'
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="Layout">
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default Layout