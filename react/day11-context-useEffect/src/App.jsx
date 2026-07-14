import React, { useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { MyStore } from "./context/MyContext";

const App = () => {
  let { count, setCount } = useContext(MyStore);
  let [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("app rendering...");
  }, [toggle]);

  return (
    <div>
      <h1>Count - {count}</h1>

      <button className="flex" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setToggle((prev) => !prev)}>
        Change toggle state
      </button>

      {toggle ? <About /> : <Contact />}
    </div>
  );
};

export default App;
