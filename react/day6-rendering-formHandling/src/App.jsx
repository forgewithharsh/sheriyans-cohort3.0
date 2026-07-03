import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState("harsh");

  let handleClick = () => {
    setUser("gullu");
  };

  return (
    <div>
      <h1>Hello</h1>
      <h1>User is - {user}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>
  );
};

export default App;
