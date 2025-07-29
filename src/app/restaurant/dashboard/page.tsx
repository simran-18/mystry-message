'use client'
import AddFoodItem from '@/app/_components/AddFoodItem'
import RestaurantHeader from '@/app/_components/RestaurantHeader'
import React,{useState} from 'react'

const Dashboard = () => {
 const [addFoodItem, setAddFoodItem] = useState(false);
  return (
    <div>
    <RestaurantHeader/>
    <div className='flex flex-col items-center justify-center mt-10 space-y-4'>
    <div className='flex space-x-4'>
    <button className='bg-black text-white rounded-md p-2' onClick={()=>setAddFoodItem(true)}>Add Food Item</button>
    <button className='bg-black text-white rounded-md p-2' onClick={()=>setAddFoodItem(false)}>Dashboard</button>
    </div>
    {addFoodItem?<AddFoodItem/>:<div>Dashboard</div>}   
    </div>
    </div>
  )
}

export default Dashboard