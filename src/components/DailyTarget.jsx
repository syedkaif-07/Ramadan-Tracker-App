import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function DailyTarget() {
    return (
        <div className=' shadow-xl rounded-2xl bg-white  p-4 border border-white ' >
            <div className='flex p-2 gap-2 items-center'>
                <div className="bg-orange-100 p-2 rounded-md w-fit">
                    <ArrowUpRight className="text-orange-600" size={18} />
                </div>
                <h2 className='text-xl'>Daily Targets</h2>
            </div>

            {/* FirstDiv */}
            <div className='grid grid-cols-12 gap-6'>
                <div className='bg-[#e6eeee] pt-4 pb-5 ps-3 p  col-span-6 rounded-lg'>
                    <p className='text-gray-400'>Pages Remaining</p>
                    <p className='text-lg font-semibold'>504</p>
                </div>
                {/* SecondBox */}
                <div className='bg-green-100 p-2  col-span-6 rounded-lg'>
                    <h2 className='text-green-500 text-sm'>Required Daily Pace</h2>
                    <h2 className='text-green-500 text-sm'>20 Pages / day</h2>
                    <p className='text-green-500 text-sm'>To finish in 30 days</p>
                </div>
            </div>
        </div>
    )
}
