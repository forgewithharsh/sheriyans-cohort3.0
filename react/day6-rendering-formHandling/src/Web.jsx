import React, { useState } from "react";
import Card from "./components/Card";
import Contact from "./components/Contact";
import About from "./components/About";

const Web = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-5 w-60">
      <input
        onChange={(e) => setName(e.target.value)}
        className="border-2"
        type="text"
        placeholder="Name"
      />

      <input
        onChange={(e) => setEmail(e.target.value)}
        className="border-2"
        type="text"
        placeholder="Email"
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        className="border-2"
        type="password"
        placeholder="Password"
      />

      <h1>This is Name - {name}</h1>
      <h1>This is Name - {email}</h1>
      <h1>This is Name - {password}</h1>
    </div>
  );
};

export default Web;
