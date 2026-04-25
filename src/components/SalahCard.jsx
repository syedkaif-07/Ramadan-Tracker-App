import React from 'react'

export default function SalahCard({title,Checkbox}) {
  return (
    <div className='border p-2 rounded-xl flex gap-2.5 items-center bg-white border-white shadow-sm'>
        {/* CheckBox */}
        <input
  type="checkbox"
  className="w-5 h-5 appearance-none border-2 border-gray-300 rounded-full cursor-pointer 
             checked:bg-green-500 checked:border-green-500 relative
             checked:after:content-['✓'] checked:after:text-white 
             checked:after:text-xs checked:after:flex 
             checked:after:items-center checked:after:justify-center"
/>
        <h3>{ title}</h3>   
       

      </div>
  )
}
