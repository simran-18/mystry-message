'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RestaurantSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [loading,setLoading] = useState(false);
  const router=useRouter();
  const [error,setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignup = async () => {
    // You can later add form validation and submission logic here
    console.log({
      email,
      password,
      confirmPassword,
      name,
      city,
      address,
      contactNumber,
    });
    if(!email || !password || !confirmPassword || !name || !city || !address || !contactNumber) {
      setError(true);
      return;
    }
    if(password !== confirmPassword) {
      setPasswordError(true);
      return;
    }       
    try{
    setLoading(true);
    const result=await fetch("/api/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
        city,
        address,
        contactNumber,
      }),
    });
    if (result.ok) {
      const data = await result.json();
      console.log("Signup successful:", data);
      if(data?.success)
       {
         const {restaurant}=data;
         delete restaurant.password;
         localStorage.setItem("restaurant", JSON.stringify(restaurant));
         router.push("/restaurant/dashboard");
       }
      else
        console.log("Signup failed! Please try again.");
    } else {
      const errorData = await result.json();
      console.error("Signup failed:", errorData);
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setCity("");
    setAddress("");
    setContactNumber("");
  } catch (error) {
    console.error("Error during signup:", error); 
  }finally{
    setLoading(false);  
  }
  };
if(loading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div className="w-full mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Restaurant Sign Up</h1>
       {error && (
          <div className="text-red-500">
            Please fill all fields!
          </div>
        )}
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter email id"
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
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-2 border rounded"
        />
        {passwordError && (
          <div className="text-red-500">
            Passwords do not match!
          </div>
        )}
        <input
          type="text"
          placeholder="Enter restaurant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Enter full address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Enter contact number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={handleSignup}
          className="form-button bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
       
      </div>
    </div>
  );
};

export default RestaurantSignup;
