import React from 'react'
import { HandHeart } from "lucide-react";
export default function RecentHistory() {
    return (
        <div className=' h-full'>
            <div className='flex justify-between p-2'>
                <h2 className='text-lg font-semibold'>Recent History</h2>
                <button className=' text-gray-400 border border-gray-300 rounded-3xl bg-gray-100 p-1 text-sm'> 0 Entries</button>
            </div>

            {/* Donation Yet */}
            <div className=' mt-5 bg-white shadow-lg h-9/14 border border-dashed border-gray-400 flex flex-col  justify-center items-center '>
                
                <div className='  h-10 w-10 flex flex-col items-center rounded-full justify-center p-2 bg-gray-100'>
                    <HandHeart className="text-gray-400" size={50} />
                    </div>
                   <h2 className='text-sm font-semibold pb-3'>No donations yet</h2>
                   <p className='text-gray-400 text-sm text-center'>Start tracking your blessings by adding a <br /> donation record.</p>
                </div>
              
           
        </div>
    )
}
