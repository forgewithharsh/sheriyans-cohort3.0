import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-4 py-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-orange-500">
            ChaiCode Notes
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            My <span className="text-orange-500">Notes</span>
          </h1>

          <p className="mt-2 text-gray-400">
            Capture your thoughts, ideas and everything you learn.
          </p>
        </div>

        {/* Add Note Box */}
        <div className="rounded-2xl border border-gray-800 bg-[#171717] p-6 shadow-xl">
          <h2 className="mb-5 text-xl font-semibold">Create a new note</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-gray-700 bg-[#0f0f0f] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500"
            />

            <textarea
              placeholder="Write your note..."
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full resize-none rounded-xl border border-gray-700 bg-[#0f0f0f] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500"
            />

            <div className="flex justify-end">
              <button
                className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400 active:scale-95"
              >
                + Add Note
              </button>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Your Notes</h2>

            <span className="rounded-full border border-gray-700 bg-[#171717] px-3 py-1 text-sm text-gray-400">
              0 Notes
            </span>
          </div>

          {/* Empty State */}
          <div className="rounded-2xl border border-dashed border-gray-700 bg-[#141414] px-6 py-14 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/10 text-2xl">
              📝
            </div>

            <h3 className="text-lg font-semibold">No notes yet</h3>

            <p className="mt-2 text-sm text-gray-500">
              Create your first note using the form above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
