import React from "react";
import Login from "./components/Login";
import { useState } from "react";
import Register from "./components/Register";
import UserCard from "./components/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-gray-300 h-screen">
      <Register setUsers={setUsers} />

      <div className="flex gap-4">
        {users.map((elem, index) => (
          <UserCard key={index} user={elem} />
        ))}
      </div>
    </div>
  );
};

export default App;
