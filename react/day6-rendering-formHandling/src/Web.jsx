import React, { useState } from "react";
import Card from "./components/Card";
import Contact from "./components/Contact";
import About from "./components/About";

const Web = () => {
  const [formData, setFormData] = useState({});

  return (
    <div className="flex flex-col gap-5 w-60">
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border-2"
        type="text"
        placeholder="Name"
      />

      <input
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border-2"
        type="text"
        placeholder="Email"
      />

      <input
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="border-2"
        type="password"
        placeholder="Password"
      />

      <h1>This is Name - {formData.name}</h1>
      <h1>This is Email - {formData.email}</h1>
      <h1>This is Password - {formData.password}</h1>
    </div>
  );
};

export default Web;
