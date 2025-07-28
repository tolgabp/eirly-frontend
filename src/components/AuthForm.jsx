import { useState } from "react";
import { Link } from "react-router-dom";

export default function AuthForm({ title, onSubmit, variant }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    try {
      await onSubmit(form);
    } catch (err) {
      const error = err.response?.data?.error || `${title} failed.`;
      setMessage(`❌ ${error}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md transition-all">
        <div className="flex justify-end mb-4">
          <Link
            to="/"
            className="text-sm px-4 py-2 bg-[#F8FAFC] text-[#1E293B] rounded-md hover:bg-gray-200 transition"
          >
            Home
          </Link>
        </div>

        <h2 className="text-3xl font-semibold text-[#1E293B] mb-6 text-center">
          {title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#4F46E5] text-white rounded-xl shadow-md hover:bg-indigo-700 transition font-medium"
          >
            {title}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-red-600">{message}</p>
        )}

        <p className="mt-6 text-center text-sm text-[#64748B]">
          {variant === "login" ? (
            <>
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-[#4F46E5] hover:underline font-medium"
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#4F46E5] hover:underline font-medium"
              >
                Log in
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
