'use client';
import React, { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignup from "../_components/RestaurantSignup";
import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantFooter from "../_components/RestaurantFooter";

const RestaurantPage = () => {
 const [login,setLogin] = useState<boolean>(true);
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
     <RestaurantHeader/>
      <div className="flex-1 flex flex-col items-center justify-center px-4 m-auto">
      {login?<RestaurantLogin/>:<RestaurantSignup/>}
       <button onClick={()=>setLogin(!login)} className="toggle-btn">
        {!login?'Already have Account? SignUp':'Do not have account?'}</button>
      </div>
     <RestaurantFooter/>
    </div>
  );
}
export default RestaurantPage;