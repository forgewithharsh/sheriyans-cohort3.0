import React from "react";

const About = () => {
  console.log("about rendering");

  setInterval(() => {
    console.log("hey i m in about");
  }, 1000);

  return (
    <div>
      <h1>This is About</h1>
    </div>
  );
};

export default About;
