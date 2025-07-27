import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Briefly</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Summarize long text into concise summaries using LLMs. Fast, simple, and private.
      </p>

      <div className="flex space-x-4">
        <Link to="/login">
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}