import React from "react";
import Comp2 from "./Comp2";

const Comp1 = ({ data, children }) => {
  console.log(data);
  return (
    <div>
      <h1>Component 1</h1>
      {children}
      {/* <Comp2 data={data}/> */}
    </div>
  );
};

export default Comp1;
