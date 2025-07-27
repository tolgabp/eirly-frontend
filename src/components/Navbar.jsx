import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md rounded-lg mb-8">
      <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
        <Link to="/dashboard">AI Summarizer</Link>
      </h1>
      <div className="flex gap-3 items-center">
        <Link
          to="/dashboard"
          className="text-sm font-medium text-gray-700 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
        >
          Dashboard
        </Link>
        <Link
          to="/history"
          className="text-sm font-medium text-gray-700 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
        >
          History
        </Link>
        <button
          onClick={logout}
          className="text-sm font-medium text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
