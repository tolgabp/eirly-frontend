import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 max-w-4xl mx-auto">
      <Navbar />
      {children}
    </div>
  );
}
