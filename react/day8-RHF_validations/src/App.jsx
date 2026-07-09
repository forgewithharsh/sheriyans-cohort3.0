import React, { useState } from "react";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar />

      {toggle ? (
        <div className="flex">
          <User />
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form />
        </div>
      )}
    </div>
  );
};

export default App;
