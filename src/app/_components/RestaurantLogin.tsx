'use client';
import React, { useState } from "react";
import {useRouter} from "next/navigation";

const RestaurantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);  
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setError(true);
      return;
    }
    setLoading(true);   
  }
  return (
    <div className="">
      <h1>Login</h1>
      {error && <div className="text-red-500 my-2 text-xs text-center">Please fill all fields!</div>}
    <div className="flex flex-col">    
        <input type="text" placeholder="Email email id" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button  onClick={handleLogin} className="form-button">Login</button>
    </div>
    </div>
  );
}
export default RestaurantLogin;