import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    // Mock login (replace with real API call)
    if (credentials.email && credentials.password) {
      // save mock token
      localStorage.setItem("token", "mock-token");
      navigate("/dashboard");
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 my-2 block w-full"
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
        className="border p-2 my-2 block w-full"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
}
