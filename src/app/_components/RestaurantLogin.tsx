'use client';
import React, { useState } from "react";

const RestaurantLogin = () => {
  return (
    <div className="container">
      <h1>Login</h1>
    <div className="main-content">    
        <input type="text" placeholder="Email email id" />
        <input type="password" placeholder="Enter password" />
        <button>Login</button>
    </div>
    </div>
  );
}
export default RestaurantLogin;