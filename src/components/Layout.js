// src/components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children, location }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar location={location} />
        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;