'use client';
import React from "react";

const RestaurantSignup = () => {
  return (
    <div className="container">
    <h1>Restaurant SignUp</h1>
    <div className="main-content">    
        <input type="text" placeholder="Email email id" />
        <input type="password" placeholder="Enter password" />
        <input type="password" placeholder="Confirm password" />
        <input type="text" placeholder="Enter Restaurant name" />
        <input type="text" placeholder="Enter city" />
        <input type="text" placeholder="Enter full address" />
        <input type="text" placeholder="Enter contact number" />
        <button>Sign Up</button>
    </div>
    </div>
  );
}
export default RestaurantSignup;