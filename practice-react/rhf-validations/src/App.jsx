import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Usercard from "./components/Usercard";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );
  const [updateData, setUpdateData] = useState(null);

  const deleteUser = (id) => {
    let filterUser = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex gap-4">
          {users.map((elem) => {
            return (
              <Usercard
                setUpdateData={setUpdateData}
                deleteUser={deleteUser}
                key={elem.id}
                user={elem}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form
            updateData={updateData}
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
          />
        </div>
      )}
    </div>
  );
};

export default App;
