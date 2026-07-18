import React from "react";

const Register = ({ setToggle }) => {
  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gao-4">
      <h1>Register</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          required
          name="name"
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Enter your Name"
        />
        <input
          required
          name="email"
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Enter your Email"
        />
        <input
          required
          name="password"
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Enter your Password"
        />
        <input
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
