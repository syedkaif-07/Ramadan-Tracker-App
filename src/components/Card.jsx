import React from 'react';
import { Droplets } from 'lucide-react';

const Card = ({title,completedDays, totalDays , para , Slash , Per , Icon , showProgress , Arrow}) => {

  return (
   
    <div className="p-6 bg-white rounded-3xl shadow-sm font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-blue-50  rounded-2xl">
          <Droplets size={28} className="text-blue-600 fill-blue-600/10" />
        </div>
        <span className="text-gray-400 font-bold text-xs tracking-widest uppercase mt-2">
        {  title}
        </span>
      </div>

      {/* Stats Section */}
      <div className="mb-4">
        <div className="flex items-baseline gap-1">
          <h2 className="text-4xl font-bold text-gray-900">{completedDays}</h2>
          <span className="text-xl text-gray-400">  {Slash} {totalDays}</span>
          <span className="text-3xl text-gray-900 font-bold "> {Per} </span>
        </div>
        <p className="text-gray-500 font-medium mt-1 text-sm ">{para}</p>
        
        <div className='flex justify-start'>
            <span className='text-red-300 mt-3.5 mr-1'>{Arrow}</span >
          <p className=' text-gray-500 font-medium mt-4 text-sm'>{Icon}</p>
        </div>
      </div>

      {/* Progress Bar */}
      
    {/* Conditional Progress Bar */}
      {showProgress && (
        <div className=" w-full rounded-full h-2.5 ">
          <div
            className="bg-gray-200  h-2.5 rounded-full"
          ></div>
        </div>
      )}
      {/* Arrow */}
      
    </div>
    
  );
};

export default Card;