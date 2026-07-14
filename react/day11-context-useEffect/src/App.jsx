import React, { useContext } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { MyStore } from "./context/MyContext";

const App = () => {
  let { count, setCount } = useContext(MyStore);
  console.log("app rendering...");

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
