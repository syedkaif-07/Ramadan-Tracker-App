import React from 'react'

export default function ReflectionCard() {
  return (
  <div className='  p-2 gap-2 bg-white border rounded-2xl border-white  shadow-sm h-full '>
        <div className='flex gap-2'>
            <div className='h-6 w-1  bg-blue-500 rounded-2xl  '/>
        <h2 className='font-semibold'>Reflections</h2> 
        </div>
        {/* Content */}
            <div className='border-2 rounded-lg border-green-700 mt-4 h-100 p-2 relative'>
                <p className='text-gray-500 text-sm'>Record Your though, Dua list, or spiritual milestones</p>
            <p className='absolute bottom-4 right-1.5 text-sm font-semibold '>Saved</p>
            </div>
            </div>
  )
}
