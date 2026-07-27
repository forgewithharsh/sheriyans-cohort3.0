import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className="p-8 max-w-3xl mx-auto flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Add New Task</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
