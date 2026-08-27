const NotesDisplay = ({ notes, onUpdate, onDelete }) => {
  return (
    <article className="mt-5 rounded-2xl border border-gray-800 bg-[#171717] p-5 shadow-lg">
      <h1 className="mb-2 text-xl font-semibold text-orange-500">
        {notes.title}
      </h1>

      <p className="mb-5 text-sm leading-6 text-gray-400">
        {notes.description}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => onUpdate(notes)}
          className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium transition hover:border-orange-500 hover:text-orange-500"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(notes._id)}
          className="rounded-lg bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default NotesDisplay;
