import React, { useState } from 'react'
// import DonationType from './DonationType'
import { Link, Heart, Utensils, Activity, Coins, ArrowRight, ArrowUpRight } from "lucide-react";

export default function AddDonation() {
  const [selected, setSelected] = useState("");

  return (
    <div className=' border border-gray-200 bg-white rounded-lg shadow-lg p-3 '>
      {/* Header */}
      <div className='flex items-center gap-2.5'>
        <button className='bg-green-200 p-1 rounded-sm'>
          +
        </button>
        <h2 className='text-md font-semibold'>Add Donation</h2>
      </div>
      {/* Input */}
      <div className='pt-5'>
        <h2 className='text-gray-500 text-sm'>Amount</h2>
        <input type="number" name="number" className='border border-gray-300 rounded-lg w-full mt-2 p-2 focus-within:outline-green-700' placeholder='$.000' />
      </div>

      {/* RadioButtons  */}

      <div className="grid grid-cols-2 gap-4 pt-3">

        {/* Sadqah */}
        <label className={`flex items-center gap-2 border p-3 rounded-lg cursor-pointer 
          ${selected === "sadqah" ? "border-green-500 bg-green-50" : "border-gray-300"}`}>

          <input
            type="radio"
            name="donation"
            value="sadqah"
            onChange={(e) => setSelected(e.target.value)}
            className="hidden"
          />
          <Heart className="text-red-500" />
          <span>Sadqah</span>
        </label>

        {/* Fitra */}
        <label className={`flex items-center gap-2 border p-3 rounded-lg cursor-pointer 
          ${selected === "Zakat" ? "border-green-500 bg-green-50" : "border-gray-300"}`}>

          <input
            type="radio"
            name="donation"
            value="Zakat"
            onChange={(e) => setSelected(e.target.value)}
            className="hidden"
          />
          <Coins className="text-yellow-500" />
          <span>Zakat</span>
        </label>

        {/* Dua */}
        <label className={`flex items-center gap-2 border p-3 rounded-lg cursor-pointer 
          ${selected === "Iftar" ? "border-green-500 bg-green-50" : "border-gray-300"}`}>

          <input
            type="radio"
            name="donation"
            value="Iftar"
            onChange={(e) => setSelected(e.target.value)}
            className="hidden"
          />
          <Activity className="text-blue-500" />
          <span>Iftar</span>
        </label>

        {/* Other */}
        <label className={`flex items-center gap-2 border p-3 rounded-lg cursor-pointer 
          ${selected === "other" ? "border-green-500 bg-green-50" : "border-gray-300"}`}>

          <input
            type="radio"
            name="donation"
            value="other"
            onChange={(e) => setSelected(e.target.value)}
            className="hidden"
          />
          <Link className="text-purple-500" />
          <span>Other</span>
        </label>

      </div>

      {/* Option ARea */}
      <div className='pt-3 p-2'>
        <p className='text-sm text-gray-500'>Note (Optional)</p>
        {/* Input */}
        <input type="text" name="" id="" className='border border-gray-400 mt-3 w-full p-2 rounded-2xl focus-within:outline-green-800' placeholder='e.g Local Mosque Fund' />
        {/* button */}
        <div className='bg-[#059669] border border-[#059669] rounded-2xl mt-5 p-3'>
          <div className='flex justify-center'>
            <button className='text-white font-semibold'>Local Contribute</button>
            <ArrowUpRight className="text-white" size={20} />
          </div>
        </div>
      </div>


    </div>
  )
}
