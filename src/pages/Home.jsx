import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-[#1E293B] mb-2">Briefly</h1>
      <p className="text-[#64748B] mb-8 text-center max-w-md">
        Summarize long text into concise summaries using LLMs. Fast, simple, and private.
      </p>

      <div className="flex space-x-4">
        <Link to="/login">
          <button className="px-6 py-2 bg-[#4F46E5] text-white rounded-xl shadow-md hover:bg-indigo-700">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-6 py-2 border border-[#4F46E5] text-[#4F46E5] rounded-xl shadow-md hover:bg-indigo-50">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}