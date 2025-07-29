'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter,usePathname } from "next/navigation";
const RestaurantHeader = () => {
  const [deatils,setDetails] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(()=>
  {
    const restaurant = localStorage.getItem("restaurant");
    if (!restaurant && pathname=="/restaurant/dashboard") {
      {
        router.push("/restaurant");
      }
    }else if(restaurant && pathname=="/restaurant" )
      {
         router.push("/restaurant/dashboard");
      } else {
      setDetails(JSON.parse(restaurant || "{}"));
    }
  },[])
  function handleClick() {
    if (deatils && deatils?.name) {
      localStorage.removeItem("restaurant");
      setDetails(null);
      router.push("/restaurant");
    }
  }
  return (
    <div className="navbar">
      <ul className="">
        <li><Link href="/">Home</Link></li>
        {deatils && deatils?.name? <>
          <li><button onClick={handleClick} className="bg-red-500 p-1 px-3 rounded-md">Logout</button></li>
          <li><Link href="/profile">Profile</Link></li> 
          </>:<li><Link href="/">Login/Signup</Link></li>}
        <li></li>
      </ul>
    </div>
  );
}
export default RestaurantHeader;