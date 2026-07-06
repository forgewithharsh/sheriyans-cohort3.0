import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      {toggle ? <Login setToggle={setToggle}/> : <Register setUsers={setUsers} setToggle={setToggle}/>}
    </div>
  );
};

export default App;
