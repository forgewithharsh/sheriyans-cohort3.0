import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counterSlice";

const LoginPage = () => {
  const { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-2xl">Count is {count}</h1>
      <button className="bg-blue-500 rounded p-1 border border-black-500" onClick={() => dispatch(increment())}>Increment</button> &nbsp;
      <button className="bg-blue-500 rounded p-1 border border-black-500" onClick={() => dispatch(decrement())}>Decrement</button> <br /> <br />
      <input className="border border-gray-500 p-1 rounded" type="text" placeholder="Enter count" />
      <button className="bg-blue-500 rounded p-1 border border-black-500">Add to count</button>
    </div>
  );
};

export default LoginPage;
