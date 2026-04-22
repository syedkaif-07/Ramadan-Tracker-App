import React from 'react'
import { ArrowRight, Goal, Target } from "lucide-react";
export default function ActiveGoals() {
  return (
    <>
    <div className='  bg-white rounded-3xl shadow-sm border border-red-500 p-5'>
        <div className='flex justify-between  '>
            <h2 className='text-2xl font-bold'>Active Goals</h2>
            <span  className='flex items-center text-green-600'>View All <ArrowRight size={15} color='green'/></span>
        </div>
        <div className='flex flex-col justify-center items-center h-40'>
            <Target size={40}  />
            <p>No goals set yet.</p>
        </div>
    </div>
    </>
  )
}
