'use client';
import React, { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignup from "../_components/RestaurantSignup";
import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantFooter from "../_components/RestaurantHeader";

const RestaurantPage = () => {
 const [login,setLogin] = useState<boolean>(true);
  return (
    <div className="main-container">
        <RestaurantHeader/>
      <h1>Restaurant Login/Signup Page</h1>
      {login?<RestaurantLogin/>:<RestaurantSignup/>}
       <button onClick={()=>setLogin(!login)} className="toggle-btn">
        {!login?'Already have Account? SignUp':'Do not have account?'}</button>
        <RestaurantFooter/>
      </div>
  );
}
export default RestaurantPage;