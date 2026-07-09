import React, { useState } from "react";

const Counter = () => {
  console.log("Counter is rendering....");

  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count is {count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
