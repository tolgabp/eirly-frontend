import { useState } from "react";

export default function SummaryForm({ onSubmit, loading }) {
  const [text, setText] = useState("");
  const [tone, setTone] = useState("");
  const [length, setLength] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text, tone, length);
    setText("");
    setTone("");
    setLength("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste long text here (min 200 characters)"
        className="w-full h-44 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
        required
      />
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
        <input
          type="text"
          placeholder="e.g., Informative, Storyteller, Friendly"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Length (e.g. brief, detailed)"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto bg-[#4F46E5] text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-60 transition-all duration-200"
      >
        {loading ? "Summarizing..." : "Summarize"}
      </button>
    </form>
  );
}
