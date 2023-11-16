import React from "react";
// import Sidebar from '../components/Sidebar';
import AppRoutes from './AppRoutes';
import '../styles/Layout.css'
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="Layout">
      {/* <Sidebar /> */}
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default Layout