import React from 'react'
import JuzMapCard from './JuzMapCard'

export default function JuzMap() {

    return (
        <div className=' bg-white border border-gray-200 shadow-sm rounded-lg  '>
            {/* Header */}
            <div className=' border  border-gray-200   p-2 pb-5 flex items-center justify-between'>
                <h2 className='text-xl font-semibold'>Juz Map</h2>
                <button className='bg-gray-200 p-1 rounded-lg text-gray-500 text-sm'>
                    Scroll to view
                </button>

            </div>
            {/* Card */}
            <div className='p-3 h-[320px]  overflow-scroll'>
                {[...Array(30)].map((_, index) => (
                    <JuzMapCard key={index}  />
                ))}
            </div>
            </div>
            )
}
