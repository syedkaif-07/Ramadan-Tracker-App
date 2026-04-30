import { Star } from 'lucide-react'
import React from 'react'

export default function FastingCard() {
  return (
    <div className='border-white p-4  rounded-2xl  shadow-sm '>
     <div className='flex items-center justify-between' >
        <div>
       <p className='font-semibold'>Fasting Status</p> 
       <p className='text-gray-500'>Tap to mark as Completed</p>
     </div>
       <Star className='bg-gray-100 rounded-2xl p-1' />
    </div>
    </div>



  )
  
}
