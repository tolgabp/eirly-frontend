import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { useState } from 'react';

export default function Navbar() {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-white shadow-md rounded-lg mb-8">
      <div className="flex justify-between w-full sm:w-auto">
        <h1 className="text-2xl font-semibold text-[#1E293B] tracking-tight">
          <Link to="/dashboard">AI Summarizer</Link>
        </h1>
        <button className="sm:hidden text-[#1E293B]" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`flex-col sm:flex-row gap-3 items-center mt-4 sm:mt-0 ${isOpen ? 'flex' : 'hidden'} sm:flex`}>
        <Link
          to="/dashboard"
          className="text-sm font-medium text-[#1E293B] px-4 py-2 bg-[#F8FAFC] rounded-md hover:bg-gray-200 transition"
        >
          Dashboard
        </Link>
        <Link
          to="/history"
          className="text-sm font-medium text-[#1E293B] px-4 py-2 bg-[#F8FAFC] rounded-md hover:bg-gray-200 transition"
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
