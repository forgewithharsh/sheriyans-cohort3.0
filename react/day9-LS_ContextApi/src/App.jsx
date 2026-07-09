import React, { useState } from "react";
import Navbar from "./components/Navbar";
import User from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  let obj = {
    name: "Harsh",
    age: 20,
  }

  localStorage.setItem('user', JSON.stringify(obj))

  let lsd = JSON.parse(localStorage.getItem('user'))
  console.log(lsd);

  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState([]);

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex gap-4">
          {users.map((elem) => (
            <User user={elem} setToggle={setToggle} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form setUsers={setUsers} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export default App;
