import React, { useState } from 'react'
import Header from './Header'
import Banner from './Banner'
import Card from './Card'
import QSCardContainer from './QSCardContainer'
import { ArrowUpRight, Calendar, Heart, Moon, Target } from 'lucide-react'
import EidCounter from './EidCounter'
import ActiveGoals from './ActiveGoals'
import QSCard from './QSCard'

export default function DashboardContent() {

    return (

        <div className='border border-red-500 w-full p-8 h-full '>
            <Banner />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-2.5 ">
                <Card title={'FASTING'} showProgress={true} completedDays={0} Slash={"/"} totalDays={30} para={"Days Completed"} />
                <Card title={'Quran'} showProgress={true} completedDays={0} Per={"%"} para={"0 of 604 Pages"} />
                <Card title={'Charity'} showProgress={false} completedDays={"$0"} para={"Total Donated"} Arrow={< ArrowUpRight />} Icon={"Keep it up!"} />
                <Card title={'Prayers'} showProgress={true} completedDays={0} para={"Prayers Logged"} />
            </div>



            {/* QuickShortCard */}
            <div className='lg:flex gap-2 mt-2.5'>
            <div className=' rounded-3xl  shadow-xl   border   bg-white  '>
                <h2 className="text-2xl text-black font-bold p-5" >Qucik Shorts</h2>
                <div className=' grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2  gap-6 ' >
                    <QSCard color="bg-red-200" Icon={<Calendar />} title={"Daily Log"} />
                    <QSCard color="bg-blue-200" Icon={<Moon />} title={"Duas"} />
                    <QSCard color="bg-red-100" Icon={<Target />} title={"My Goals"} />
                    <QSCard color="bg-red-100" Icon={<Heart />} title={"Donate"} />
                </div>
                 </div> 
                <div className='lg:flex-1/5 '>
                     <EidCounter />  
                </div>
            </div>




            <div className='grid grid-cols-12  mt-2.5 '>
                <div className='col-span-8'>
                    <ActiveGoals />
                </div>
            </div>




            {/* Active Goals */}





            {/* <div className="grid grid-cols-12 border border-red-700">
  <div className="col-span-8 border border-amber-800">
    Big box
  </div>

  <div className="col-span-4 border border-amber-800">
    Small box
  </div>
</div> */}

            
        </div>

    )
}



