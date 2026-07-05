import React from "react";
import Card from "./components/Card";
import Contact from "./components/Contact";
import About from "./components/About";

const Web = () => {

  return (
    <div className="flex flex-col gap-5 w-60 m-auto">
      <input className="border-2" type="text" placeholder="Name"/>
      <input className="border-2" type="text" placeholder="Email"/>
      <input className="border-2" type="text" placeholder="Password"/>
      <button className="border-2">Submit</button>
    </div>
  );
};

export default Web;
