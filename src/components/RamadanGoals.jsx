import { HandHeart } from 'lucide-react'
import React from 'react'
import { Trophy } from "lucide-react";
export default function RamadanGoals() {
    return (
        <div className='flex justify-center items-center flex-col pt-10'>
            <h2 className='text-3xl font-semibold '>Ramadan Goals</h2>
            <p className='text-gray-500 pt-2'>Set intentions and strive to achieve them.</p>
            {/* Input */}
            <label className="bg-white border focus-within:border-2 focus-within:border-green-700 border-gray-400 lg:w-2/4 p-2 w-3/4 rounded-lg flex items-center gap-2 mt-5">

                {/* Left + button */}
                <button className="text-green-700 text-2xl font-bold px-2">
                    +
                </button>

                {/* Input */}
                <input
                    type="text"
                    placeholder="Add a New goal (e.g, Read Taraweeh at mosque)"
                    className="flex-1 outline-none"
                />

                {/* Right button */}
                <button className="bg-gray-400 text-white w-8 h-8 rounded-lg flex items-center justify-center">
                    +
                </button>



            </label>

            {/* Add a Goals */}

            

                {/* Donation Yet */}
                <div className=' mt-10 bg-white shadow-lg h-50 lg:w-2/4 w-3/4 border border-dashed border-gray-400 flex flex-col  justify-center items-center '>

                    <div className=' mb-5  h-10 w-10 flex flex-col items-center rounded-full justify-center p-2 bg-gray-100'>
                        <Trophy className="text-gray-400" size={50} />
                    </div>
                    <h2 className='text-sm font-bold text-gray-400 pb-3'>No goals yet. Start by adding one above!</h2>

                </div>
                </div>
                
                )
}
