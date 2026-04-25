import React from 'react'
import SalahCard from './SalahCard'
import { CheckSquare, Square, Check } from "lucide-react";
export default function PrayerLog() {
  return (
    <div className=' p-2 gap-2 bg-white border-white shadow-sm '>
        <div className='flex gap-2'>
            <div className='h-6 w-1  bg-blue-500 rounded-2xl  '/>
        <h2 className='font-semibold'>Prayer Log</h2> 
        </div>
        <div className=' p-1.5 mt-3.5 flex flex-col gap-5 '>
            <SalahCard  title={"Fajr"} />
            <SalahCard title={"Zohar"} />
            <SalahCard title={"Asar"} />
            <SalahCard title={"Magrib"} />
            <SalahCard title={"Isha"} />
        </div>
    </div>
  )
}
