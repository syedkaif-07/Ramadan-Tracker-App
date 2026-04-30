import React, { useState } from 'react'
import { useActionState } from 'react'

export default function QuranComplete({pages,setPages,percentage}) {
  
    return (
        <div className=' p-5 rounded-xl border-5 border-t-green-400  bg-[#F3F4F6] shadow-inner border-[#F3F4F6] h-full' >
            {/* Percentage circle */}
            <div className='flex justify-center items-center  '>
                <div className='  bg-[#E5E7EB] shadow-inner w-40 h-40 flex flex-col items-center gap-2 justify-center rounded-full bg- '>
                    <h1 className="text-3xl font-bold">{percentage}%</h1>
                    <p className="text-gray-500 text-sm tracking-widest">COMPLETED</p>
                </div>
            </div>

            {/* Counter */}

            <div className='flex items-center justify-between gap-3 pt-6  '>
                {/* Minus Btn */}
                <button onClick={() => setPages(pages > 0 ? pages - 1 : 0)} className=' cursor-pointer  flex justify-center items-center p-4 font-semibold border  border-[#E5E7EB] w-12 h-8 rounded-lg bg bg-[#e5e7eb]'>−</button>
                <div className='font-semibold flex-1 p-5 text-lg bg-white w-22 h-8 border-gray-300 border rounded-lg text-center flex justify-center items-center'>
                    {pages}
                </div>
                <button onClick={()=>setPages(pages+1)} className=' flex justify-center items-center cursor-pointer  font-semibold border  border-[#E5E7EB] w-12 h-8 rounded-lg bg bg-[#A7F3D0]'>+</button>
            </div>
            {/* PageNumber */}
            <div>
            <p className='text-center pt-4 text-gray-400 text-sm'>Page Number</p>
            </div>

           {/* AddNumber btn */}

            <div className='pt-8 flex justify-center items-center gap-2'>
                <button  onClick={()=>setPages(pages+5)} className='border cursor-pointer font-semibold bg-white  border-[#E5E7EB] flex-1 p-1 rounded-lg'>+5 Pages</button>
                <button  onClick={()=>setPages(pages+10)} className='border cursor-pointer font-semibold bg-white border-[#E5E7EB] flex-1 p-1 rounded-lg'>+10 Pages</button>
            </div>
        </div>

    )
}
