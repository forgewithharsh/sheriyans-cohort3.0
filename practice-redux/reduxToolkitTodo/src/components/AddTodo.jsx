import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { Plus, ListTodo } from "lucide-react";

const Todos = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <ListTodo size={32} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-slate-800">Redux Todo App</h1>
        </div>

        {/* Form */}
        <form onSubmit={addTodoHandler} className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Enter a new todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition-all"
          >
            <Plus size={18} />
            Add
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          Add your daily tasks using Redux Toolkit 🚀
        </p>
      </div>
    </div>
  );
};

export default Todos;
