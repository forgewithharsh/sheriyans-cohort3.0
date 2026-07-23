import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getUsersData() {
    const res = await axios.get("https://fakestoreapi.com/users");

    setUsers(res.data);
    setLoading(false);
  }

  useEffect(() => {
    getUsersData();
  }, []);

  if (loading) return <h1 className="text-3xl">Loading...</h1>;

  return (
    <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((val) => {
        return <UserCard key={val.id} user={val} />;
      })}
    </div>
  );
};

export default UsersPage;
