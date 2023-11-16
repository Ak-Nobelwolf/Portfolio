import React from "react";
import { useWindowSize } from "../components/useWindowSize";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";

function Navbar() {
  const { width } = useWindowSize();
//   console.log("Window width:", width);

  return (
    <div>
      {width < 768 ? <MobileSidebar /> : <Sidebar />}
    </div>
  );
}

export default Navbar;
