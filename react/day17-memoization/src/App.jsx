import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("app rendering");

  return (
    <div>
      <h1>Memoization</h1>
      <h2>Count - {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Home />
      <About />
    </div>
  );
};

export default App;
