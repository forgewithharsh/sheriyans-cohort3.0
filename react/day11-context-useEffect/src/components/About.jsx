import React, { useEffect } from "react";

const About = () => {
  let interval = setInterval(() => {
    console.log("hey i m in about");
  }, 1000);

  useEffect(() => {
    console.log("About rendering...");

    // * Only use when your components leaks some memory
    // * and if you want to track any updates

    return () => {
      clearInterval(interval);
      console.log("i m triggered kuki about jaa chuka hai");
    };
  }, []);

  return (
    <div>
      <h1>This is About</h1>
    </div>
  );
};

export default About;
