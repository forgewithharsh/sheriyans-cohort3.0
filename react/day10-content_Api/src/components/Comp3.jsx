import React from "react";
import Comp4 from "./Comp4";

const Comp3 = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Component 3 inside Component 2</h1>
      <Comp4 data={data} />
    </div>
  );
};

export default Comp3;
