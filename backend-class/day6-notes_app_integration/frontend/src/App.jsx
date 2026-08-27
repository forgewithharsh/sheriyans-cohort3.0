import { useState } from "react";
import axios from "axios";

const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Api call
    const res = await axios.post(
      "http://localhost:3000/notes/create",
      formValues,
    );

    setFormValues({
      title: "",
      description: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-4 py-10 text-white">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <p className="mb-2 text-sm font-medium text-orange-500">
            ChaiCode Notes
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            My <span className="text-orange-500">Notes</span>
          </h1>

          <p className="mt-2 text-gray-400">
            Capture your thoughts, ideas and everything you learn.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-800 bg-[#171717] p-6 shadow-xl"
        >
          <h2 className="mb-5 text-xl font-semibold">Create a new note</h2>

          <input
            type="text"
            placeholder="Note title..."
            value={formValues.title}
            onChange={handleChange}
            name="title"
            className="mb-4 w-full rounded-xl border border-gray-700 bg-[#0f0f0f] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-orange-500"
          />

          <textarea
            placeholder="Write your note..."
            rows={5}
            value={formValues.description}
            onChange={handleChange}
            name="description"
            className="mb-4 w-full resize-none rounded-xl border border-gray-700 bg-[#0f0f0f] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-orange-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400 active:scale-[0.98]"
          >
            + Add Note
          </button>
        </form>

        <section className="mt-10">
          <header className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Your Notes</h2>

            <span className="rounded-full border border-gray-700 bg-[#171717] px-3 py-1 text-sm text-gray-400">
              0 Notes
            </span>
          </header>

          <article className="rounded-2xl border border-dashed border-gray-700 bg-[#141414] px-6 py-14 text-center">
            <p className="mb-4 text-3xl">📝</p>

            <h3 className="text-lg font-semibold">No notes yet</h3>

            <p className="mt-2 text-sm text-gray-500">
              Create your first note using the form above.
            </p>
          </article>
        </section>
      </section>
    </main>
  );
};

export default App;
