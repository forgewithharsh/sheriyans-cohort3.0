import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import { useCallback } from "react";
import { useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({ name: "Harsh", id: 789 });
  console.log("app rendering");

  let calculation = useMemo(() => {
    console.log("calculation running");

    let sum = 0;

    for (let i = 0; i < 100; i++) {
      sum += i;
    }
    return sum;
  }, []);

  let greet = useCallback(() => {
    console.log("hello...");
  }, []);

  return (
    <div>
      <h1>Memoization</h1>
      <h2>Count - {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Calculations - {calculation}</h2>

      <h2>Name is {users.name}</h2>
      <button
        onClick={() => {
          setUsers({ ...users, name: "Harry" });
        }}
      >
        Change name
      </button>

      <Home users={users} />
      <About greet={greet} />
    </div>
  );
};

export default App;
