import React from "react";
import Sidebar from '../components/Sidebar';
import AppRoutes from './AppRoutes';
import '../styles/Layout.css'

const Layout = () => {
  return (
    <div className="Layout">
      <Sidebar />
      <AppRoutes/>
    </div>
  )
}

export default Layout