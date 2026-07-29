import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Usercard from "./components/Usercard";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );

  const deleteUser = (id) => {
    let filterUser = users.filter((user, index) => {
      return index !== id;
    });

    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex gap-4">
          {users.map((elem, index) => (
            <Usercard
              ind={index}
              deleteUser={deleteUser}
              key={index}
              user={elem}
              setToggle={setToggle}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form users={users} setUsers={setUsers} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export default App;
