import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      {toggle ? <Login setToggle={setToggle}/> : <Register setToggle={setToggle}/>}
    </div>
  );
};

export default App;
