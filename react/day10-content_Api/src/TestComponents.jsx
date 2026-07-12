import React, { useState } from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";

const TestComponents = () => {
  const [data, setData] = useState("hey this is central data");
  return (
    <div>
      <h1>All Components</h1>
      <Comp1 data={data} />
      
    </div>
  );
};

export default TestComponents;
