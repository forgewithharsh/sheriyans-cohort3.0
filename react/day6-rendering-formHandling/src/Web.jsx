import React from "react";
import Card from "./components/Card";
import Contact from "./components/Contact";
import About from "./components/About";

const Web = () => {
  let arr = [2, 3, 4, 5, 6, 7, 8, 9, 0, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <div className="">
      {arr.map((index) => {
        return <Card key={index}/>
      })}
    </div>
  );
};

export default Web;
