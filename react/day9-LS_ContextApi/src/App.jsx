import React, { useState } from "react";
import Navbar from "./components/Navbar";
import User from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [updatedData, setUpdatedData] = useState(null);

  const deleteUser = (id) => {
    let filterUser = users.filter((val, index) => {
      return index !== id;
    });
    console.log(filterUser);
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex flex-wrap gap-4">
          {users.map((elem, index) => (
            <User
              setUpdatedData={setUpdatedData}
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
          <Form updatedData={updatedData} users={users} setUsers={setUsers} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export default App;
