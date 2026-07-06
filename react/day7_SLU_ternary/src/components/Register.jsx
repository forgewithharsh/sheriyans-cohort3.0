import React, { useState } from "react";

const Register = ({ setToggle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  console.log(formData);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gao-4">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
        <input
          required
          value={formData.name}
          name="name"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Enter your Name"
        />
        <input
          required
          value={formData.email}
          name="email"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Enter your Email"
        />
        <input
          required
          value={formData.password}
          name="password"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Enter your Password"
        />
        <button className="p-2 bg-blue-600 text-white rounded">Register</button>
      </form>
      <p>
        Already have an Account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-600 cursor-pointer"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
