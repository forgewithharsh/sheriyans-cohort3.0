import React, { useState } from "react";
import Navbar from "./components/Navbar";
import User from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar />
    </div>
  );
};

export default App;
