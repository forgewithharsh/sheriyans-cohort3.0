import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { CircleCheckBig, Trash2 } from "lucide-react";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <div className="flex justify-center px-5 py-10">
      <div className="w-full max-w-2xl rounded-3xl border border-amber-200 bg-white p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-zinc-900">Your Todos</h2>

          <span className="rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700">
            {todos.length} Task{todos.length !== 1 && "s"}
          </span>
        </div>

        {todos.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-zinc-300 bg-[#faf7f2] py-12 text-center">
            <CircleCheckBig size={40} className="mx-auto mb-3 text-amber-500" />

            <p className="font-medium text-zinc-700">No Todos Added Yet</p>

            <p className="mt-2 text-sm text-zinc-500">
              Add your first task above 🚀
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-[#faf7f2] p-4 transition-all hover:border-amber-400 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <CircleCheckBig size={22} className="text-amber-500" />

                  <p className="font-medium text-zinc-800">{todo.text}</p>
                </div>

                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="rounded-xl bg-red-50 p-3 text-red-500 transition-all hover:bg-red-500 hover:text-white"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Todos;
