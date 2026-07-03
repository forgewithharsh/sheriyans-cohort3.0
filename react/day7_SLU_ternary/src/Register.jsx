import React from "react";

const Register = () => {
  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gao-4">
      <h1>Register</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
        />
        <button className="p-2 bg-blue-600 text-white rounded">Register</button>
      </form>
      <p>
        Already have an Account? <span className="text-blue-600 cursor-pointer">Register here</span>
      </p>
    </div>
  );
};

export default Register;
