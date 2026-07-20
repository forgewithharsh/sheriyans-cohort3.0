import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  // const [users, setUsers] = useState([]);

  return (
    // <div className="bg-gray-300 h-screen">
    //   <Register setUsers={setUsers} />

    //   <div className="flex gap-4">
    //     {users.map((elem, index) => (
    //       <UserCard key={index} user={elem} />
    //     ))}
    //   </div>
    // </div>

    <div>
      <Form/>
    </div>
  );
};

export default App;
