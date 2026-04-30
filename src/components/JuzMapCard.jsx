import React from 'react'

export default function JuzMapCard() {
  return (
    <div className='bg-white p-3  border-gray-200 mb-3 border rounded-lg shadow-sm'>
      {/* Number */}
      <div className='flex items-center gap-2 font-semibold'>
        <div className='bg-[#E5E7EB] rounded-full w-8 h-8 flex justify-center items-center  '>
          <h2 className='text-[#6b6c6f]'>1</h2>
        </div>
        <h2 className='text-md '>JuZ 1</h2> 
      </div>
      <p className='text-sm px-7 text-gray-500'>Pages 1to20</p>
      {/* Progress bar */}
      <div className='w-full mt-2 flex gap-4 items-center '>
        <div className='bg-gray-200 h-2.5 rounded-full w-full'>
          <div className='bg-gray-200 h-2.5 rounded-full w-[0%]'></div>
        </div>
      </div>
    </div>
  )
}
