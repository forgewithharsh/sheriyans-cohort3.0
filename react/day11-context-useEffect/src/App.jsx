import React, { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;
