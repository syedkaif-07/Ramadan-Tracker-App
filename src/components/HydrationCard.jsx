import { Droplets } from 'lucide-react'
import React from 'react'


export default function HydrationCard() {
    return (

        <div className=' bg-white shadow-sm rounded-2xl  border-white pb-3.5 px-6 pt-6 '>
            <div className='flex gap-1 '>
                <div className='h-6 w-1  bg-blue-500 rounded-2xl  '/>
                <h2 className='font-semibold'>Hydration</h2>

            </div>
            {/* Droplets Grid */}
         
            <div className='grid grid-cols-4 gap-4 justify-items-center p-3'>
                <Droplets size={22} className="text-gray-400" />
                <Droplets size={22} className="text-gray-400" />
                <Droplets size={22} className="text-gray-400" />
                <Droplets size={22} className="text-gray-400" />
                <Droplets size={22} className="text-gray-400" />
                <Droplets size={22} className="text-gray-400" />
                <Droplets size={22} className="text-gray-400" />
            </div>
            <p className=' text-gray-400 text-sm '>Track water between Iftar and Suhoor</p>
        </div>

    )
}
