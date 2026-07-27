import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../features/todo/todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg px-4 py-3">
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(toggleTodo(todo.id))}
          className={`h-5 w-5 rounded-full border-2 flex items-center justify-center text-xs ${
            todo.completed ? "border-orange-500 bg-orange-500 text-white" : "border-gray-300 dark:border-gray-500"
          }`}
        >
          {todo.completed && "✓"}
        </button>
        <span className={`text-gray-700 dark:text-gray-200 ${todo.completed ? "line-through text-gray-400 dark:text-gray-500" : ""}`}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-400 hover:text-red-500 transition">
        🗑
      </button>
    </div>
  );
}
