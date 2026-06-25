import React from "react";

const App = () => {
  let count = 10;

  return (
    <div>
      <h1>Count is - {count}</h1>

      <button
        onClick={() => {
          count++;
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default App;
