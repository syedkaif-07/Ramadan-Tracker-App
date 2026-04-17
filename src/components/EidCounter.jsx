import { Link } from 'lucide-react'
import React from 'react'
import Timer from './Timer'

export default function EidCounter() {
    
  return (
    <>
    <div className=' border-t-4 border-t-green-600 relative  h-full  rounded-2xl ' >
        <div className='bg-[#121A2D] absolute w-full  h-full  rounded-lg '>
            <div className='flex  gap-6 justify-center items-center mt-25 flex-col'>
                <h2 className='text-lg font-bold text-green-300'>Countdown to Eid</h2>
                {/* time */}
                
               <Timer  />
                <h2 className='text-gray-400'>Days Remaining</h2>
                {/* Full COuntDown */}
                  <button className='btn border p-1 rounded-sm text-white bg-[#47505E] '>Full CountDown  </button>
             
            </div>
        </div>
       
    </div>
    </>
  )
}

