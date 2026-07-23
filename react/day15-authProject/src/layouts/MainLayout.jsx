import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainContent = () => {
  console.log("main");
  return (
    <div className="h-screen">
      <Navbar />

      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;
