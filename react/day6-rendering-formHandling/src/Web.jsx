import React, { useState } from "react";
import Card from "./components/Card";
import Contact from "./components/Contact";
import About from "./components/About";

const Web = () => {
  const [name, setName] = useState("");
  console.log(name);

  return (
    <div className="flex flex-col gap-5 w-60">
      <input
        onChange={(e) => setName(e.target.value)}
        className="border-2"
        type="text"
        placeholder="Name"
      />

      <h1>This is Name - {name}</h1>
    </div>
  );
};

export default Web;
