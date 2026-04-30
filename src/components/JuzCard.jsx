import React from 'react'
import { PanelBottom } from "lucide-react";
export default function JuzCard({ percentage }) {
    return (
        <div className=' bg-[#7850EE] shadow-lg  p-4 rounded-lg'>
            <div className='flex justify-between'>
                <h3 className='text-gray-100'>Currently Reading</h3>
                <PanelBottom className='text-[#A28FF6]' />
            </div>
            <h2 className='text-3xl text-white'>Juz 1</h2>

            {/* Progress Card */}
            <div className='bg-[#ffffff2c] border rounded-lg border-gray-400 mt-3 p-5 '>

                <div className='flex justify-between'>
                    <h2 className='text-white'>Progress</h2>
                    <h2 className='text-white'>{percentage}%</h2>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-[rgba(255,255,255,0.32)] h-2 rounded mt-2">
                <div
                    className="bg-green-500 h-2 rounded"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            </div>
            
        </div>
    )
}
