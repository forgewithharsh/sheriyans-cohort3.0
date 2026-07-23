import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainContent = () => {
  return (
    <div className="grid h-screen grid-cols-[260px_1fr] overflow-hidden">
      <Navbar />

      <main className="overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainContent;
