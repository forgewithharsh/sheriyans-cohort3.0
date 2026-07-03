import React, { useState } from "react";

const Register = ({ setToggle }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gao-4">
      <h1>Register</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
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
