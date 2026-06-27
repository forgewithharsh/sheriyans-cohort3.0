import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {

  const [count, setCount] = useState(0);

  let [flag, setFlag] = useState(true)
  console.log(flag);


  return (
    <div>
      <h1>Count is - {count}</h1>

      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment
      </button>

      <button onClick={() => setFlag(false)}>Change Boolean</button>
    </div>

    // <div>
    //   <Navbar />
    //   <Hero />
    //   <Footer />
    // </div>
  );
};

export default App;
