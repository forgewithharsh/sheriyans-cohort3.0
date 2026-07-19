import React, { useState } from "react";

const Register = ({ setUsers }) => {
  const [formData, setFormData] = useState({
    name: "harsh",
    email: "haa@gmail.com",
    password: "123",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
      image: "",
    });
  };

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gao-4">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          value={formData.name}
          onChange={handleChange}
          required
          name="name"
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Enter your Name"
        />
        <input
          value={formData.email}
          onChange={handleChange}
          required
          name="email"
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Enter your Email"
        />
        <input
          value={formData.password}
          onChange={handleChange}
          required
          name="password"
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Enter your Password"
        />
        <input
          value={formData.image}
          onChange={handleChange}
          required
          name="image"
          className="p-2 border border-gray-400 rounded"
          type="url"
          placeholder="Enter your Image"
        />
        <button className="p-2 bg-blue-600 text-white rounded">Register</button>
      </form>
      <p>
        Already have an Account?{" "}
        <span className="text-blue-600 cursor-pointer">Login here</span>
      </p>
    </div>
  );
};

export default Register;
