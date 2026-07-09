import React from "react";
import About from "./About";

let App = () => {
  return (
    <div>
      <h1>hello</h1>
      <h2>bye</h2>
      <h3>vapus aoo</h3>
      <About width="300" name="harsh" age={19} element={<h1>hello</h1>}>
        <h1>Hello</h1>
      </About>
    </div>
  );
};

export default App;
