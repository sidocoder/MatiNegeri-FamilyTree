import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to the Family Tree App</h1>
      <p className="text-lg text-gray-600 mb-8">
        Visualize and manage your family history.
      </p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          to="/dashboard"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
