import React from "react";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  return (
    <div bg-gray-300 h-screen flex justify-center items-center>
      <Login />
      <Register />
    </div>
  );
};

export default App;
