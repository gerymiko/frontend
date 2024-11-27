import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      setToken(response.data.token);
      alert("Login successful");
    } catch (error) {
      alert("Login failed");
    }
  };

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:8080/register", {
        username,
        password,
      });
      alert("Registration successful");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 mt-4"
          onClick={handleRegister}
        >
          Register
        </button>
        {token && (
          <div className="mt-4">
            <h3 className="text-lg font-bold">Token</h3>
            <p className="break-all">{token}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
