import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DayTracker() {
  return (
    <div className='w-full flex justify-center mt-6 '>

  {/* Main Container */}
  <div className='w-[600px] bg-white border-white shadow-md rounded-xl flex items-center justify-between px-4 py-3'>

    {/* Left Arrow */}
    <button className="p-2 rounded-full hover:bg-gray-100">
      <ChevronLeft size={20} />
    </button>

    {/* Center Area */}
    <div className='flex flex-col items-center w-full px-4'>
      
      <h2 className='font-semibold'>Day 0</h2>

      {/* Progress bar */}
      <div className='w-full mt-2 flex gap-4 items-center justify-center'>
        <div className='bg-gray-200 h-2.5 rounded-full w-1/4'>
          <div className='bg-gray-400 h-2.5 rounded-full w-[0%]'></div>
        </div>
        <p className='text-center text-sm text-gray-500 '>0% Done</p>
      </div>

    </div>

    {/* Right Arrow */}
    <button className="p-2 rounded-full hover:bg-gray-100">
      <ChevronRight size={20} />
    </button>

  </div>
</div>
  )
}
