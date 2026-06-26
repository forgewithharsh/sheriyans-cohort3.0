import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  let count = 10;

  return (
    <div>
      <h1>Count is - {count}</h1>

      <button
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        Increment
      </button>
    </div>

    // <div>
    //   <Navbar />
    //   <Hero />
    //   <Footer />
    // </div>
  );
};

export default App;
