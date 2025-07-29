'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RestaurantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");  
  const router = useRouter();

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please fill all fields!");
      return;
    }

    try {
      setLoading(true);
      const result = await fetch("/api/restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, login: true }),
      });

      const data = await result.json();

      if (data.success) {
        const { restaurant } = data;
        console.log("Login successful:", data);
        delete restaurant.password; // just in case
        localStorage.setItem("restaurant", JSON.stringify(restaurant));
        router.push("/restaurant/dashboard");
      } else {
        setError(data?.error || "Login failed. Please try again.");
      }

    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-semibold mb-4 text-center">Restaurant Login</h1>

      {error && (
        <div className="text-red-500 my-2 text-sm text-center">
          {error}
        </div>
      )}

      <div className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={handleLogin}
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default RestaurantLogin;
