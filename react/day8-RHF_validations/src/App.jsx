import React from "react";
import Navbar from "./components/Navbar";
import User from "./components/User";

const App = () => {
  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar />
      <div className="flex">
        <User />
      </div>
    </div>
  );
};

export default App;
