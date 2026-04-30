import React, { useState } from 'react'
import AddSidebar from '../components/AddSidebar';
import Header from '../components/Header';
import Card from '../components/Card';
import Banner from '../components/Banner';
import { ArrowUpRight, BookOpen, Goal, Target } from 'lucide-react';
import QuranComplete from '../components/QuranComplete';
import DailyTarget from '../components/DailyTarget';
import JuzCard from '../components/JuzCard';
import JuzMap from '../components/JuzMap';
export default function Quran() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    const [pages, setPages] = useState(0)
    const totalPages = 604;
    const percentage = Math.round((pages / totalPages) * 100);

  return (
    <>
    
        <div className="flex">
          <div className="lg:flex-1/3">
            <AddSidebar menuOpen={menuOpen} />
          </div>

          <div className="lg:flex-3/4  h-full   flex-3/4  ">
            <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />

            {/* Quran Progress Content  */}
            <div className='flex flex-col  w-full p-2 h-full pt-10'>

              {/* Top Row */}
              <div className='md:flex lg:flex md:justify-between lg:justify-between items-center'>

                <div className='flex items-center gap-1.5'>
                  <BookOpen size={18} className='text-green-400' />
                  <h2>Quran Progress</h2>
                </div>

                <div className='flex items-center gap-1.5 p-1.5 bg-green-100 rounded-xl'>
                  <Target size={18} className='text-green-500' />
                  <h2 className='text-green-500' >Goal: Finish by Eid</h2>
                </div>

              </div>

              {/* Bottom Text */}
              <p className='text-gray-500'>
                Track your recitation journey to Khatam.
              </p>

            </div>
            {/*  */}
            <div className='grid grid-cols-12 gq  lg:grid-rows-3 grid-rows-4  gap-12 pb-10 pt-10 '>
              <div className='lg:col-span-4 col-span-12 row-start-1  row-span-2 sm:col-span-12' >
                  <QuranComplete pages={pages} setPages={setPages}  percentage={ percentage}  />
              </div>

              {/* DailyTarget */}
                <div className='lg:col-span-6 col-span-12 row-span-1 ' >
                  <DailyTarget/>
                </div>

                 {/* DailyTarget */}
                <div className='lg:col-span-4 row-span-1  col-span-12 row-start-3  ' >
                  <JuzCard percentage={percentage}/>
                </div>

                <div className='lg:col-span-6  col-span-12 row-span-2 lg:row-start-2    ' >
                  <JuzMap percentage={percentage}/>
                </div>
               
                
          </div>
        </div>
      </div>
 
    </>
  );
}