'use client';
import React, { useState } from "react";

const RestaurantLogin = () => {
  return (
    <div className="">
      <h1>Login</h1>
    <div className="flex flex-col">    
        <input type="text" placeholder="Email email id" />
        <input type="password" placeholder="Enter password" />
        <button className="form-button">Login</button>
    </div>
    </div>
  );
}
export default RestaurantLogin;