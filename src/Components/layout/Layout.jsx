import React from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import "./Layout.scss";

const Layout = ({children}) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="content">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
