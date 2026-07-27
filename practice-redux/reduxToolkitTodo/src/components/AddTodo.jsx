import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { Plus, ListTodo } from "lucide-react";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="flex justify-center px-5 pt-14">
      <div className="w-full max-w-2xl rounded-3xl border border-amber-200 bg-white p-8 shadow-xl">
        {/* Heading */}
        <div className="mb-8 flex items-center gap-4">
          <div className="rounded-2xl bg-amber-500 p-3">
            <ListTodo size={28} className="text-white" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-zinc-900">
              Redux Todo App
            </h1>
            <p className="text-zinc-500">
              Manage your daily tasks using Redux Toolkit
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={addTodoHandler} className="flex gap-4">
          <input
            type="text"
            placeholder="What are you planning today?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-2xl border border-zinc-300 bg-[#faf7f2] px-5 py-3 text-zinc-800 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          />

          <button
            type="submit"
            className="flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            <Plus size={18} />
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
