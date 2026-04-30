import React, { useState } from 'react'
import Header from '../components/Header'
import AddSidebar from '../components/AddSidebar'
import DashboardContent from '../components/DashboardContent'
import Banner from '../components/Banner'
import Card from '../components/Card'
import { ArrowUpRight, Calendar, Heart, Moon, Target } from 'lucide-react'
import QSCard from '../components/QSCard'
import ActiveGoals from '../components/ActiveGoals'
import EidCounter from '../components/EidCounter'
import DayTracker from '../components/DayTracker'
import FastingCard from '../components/fastingCard'
import HydrationCard from '../components/HydrationCard'
import PrayerLog from '../components/PrayerLog'
import ReflectionCard from '../components/ReflectionCard'

export default function Profile() {

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      {/* SIDEBAR */}
      <div className="grid grid-cols-2 md:grid-cols-5">
        <div className="col-span-1 ">
        {/* <div className="lg:flex-1/4 col-span-1"> */}
          <AddSidebar menuOpen={menuOpen} />
        </div>

        {/* <div className="lg:flex-3/3 flex-3/4 col-span-4"> */}
        <div className="col-span-5 ">
          <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
        
         
          {/* DashboardContent */}
            </div>
            <div className='col-span-5 lg:col-span-2 lg:col-start-3 '>
            <div >
              <DayTracker />
            </div>
     
          
          {/* <div className='flex justify-center items-center'> */}
          {/* Parent */}
          <div className=' grid lg:grid-cols-2 md:grid-cols-2  gap-10 pt-10 p-8'>
          {/* <div className='grid  row-span-12 col-span-12 border grid-cols-2 gap-10'> */}
          {/* FastingCard */}
          <div className='row-span-1 '>
            <FastingCard />
          </div>
            {/* HydrationCard */}
            <div  className='row-span-1 '>
            <HydrationCard />
            </div>  
            {/* PrayerCard */}
            <div className='row-span-3 '>
            <PrayerLog />
            </div>
            <div className=' row-span-2  '>
              <ReflectionCard />
            </div>
          </div>
         

        </div>
      </div>

      {/* Example grid Boxes */}

      {/* <div className="grid grid-cols-12 border border-red-700">
  <div className="col-span-8 border border-amber-800">
    Big box
  </div>

  <div className="col-span-4 border border-amber-800">
    Small box
  </div>
</div> */}





    </>
  )
}
