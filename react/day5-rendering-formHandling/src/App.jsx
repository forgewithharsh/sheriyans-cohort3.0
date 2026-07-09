import React, { useState } from "react";

const App = () => {
  console.log("app rendering...");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Harsh",
  });

  return (
    <div>
      <h1>Count is - {count}</h1>
      <h1>Name is - {user.name}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setUser({ name: "Harry" })}>Change name</button>
    </div>
  );
};

export default App;
