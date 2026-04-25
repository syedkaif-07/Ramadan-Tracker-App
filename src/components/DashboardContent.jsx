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
          <>
  
        <div className=' w-full p-8 h-full '>
            <Banner />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-2.5 ">
                <Card title={'FASTING'} showProgress={true} completedDays={0} Slash={"/"} totalDays={30} para={"Days Completed"} />
                <Card title={'Quran'} showProgress={true} completedDays={0} Per={"%"} para={"0 of 604 Pages"} />
                <Card title={'Charity'} showProgress={false} completedDays={"$0"} para={"Total Donated"} Arrow={< ArrowUpRight />} Icon={"Keep it up!"} />
                <Card title={'Prayers'} showProgress={true} completedDays={0} para={"Prayers Logged"} />
            </div>



            {/*End Section*/}

            <div className=' grid grid-cols-12 gap-10 w-full mt-2.5 '>
                <div className=' col-span-12 lg:col-span-8 '>
                    <div className=' border border-white bg-white rounded-2xl p-2 shadow-sm mt-2.5 '>
                        <h2 className='font-semibold text-xl'>Quick Shortcuts</h2>
                        <div className="grid lg:grid-cols-4 mt-5 md:grid-cols-4 grid-cols-2">
                            <QSCard color="bg-blue-100" Icon={<Calendar  className=" stroke-blue-500"  />} title={"Daily Log"} />
                            <QSCard color="bg-pink-100" Icon={<Moon className=" stroke-purple-500"  />} title={"Duas"} />
                            <QSCard color="bg-pink-100" Icon={<Target className=" stroke-orange-500"   />} title={"My Goals"} />
                            <QSCard color="bg-pink-100" Icon={<Heart className=" stroke-red-500"   />} title={"Donate"} />
                        </div>
                        </div>
                        
                        {/* Active Goals */}
                        <div className=' mt-2.5'>
                            <ActiveGoals />
                        </div>
                    </div>
                    <div className=' col-span-12 lg:col-span-4 mt-2.5 shadow-sm'>
                        <EidCounter />
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


            </div>

                    </>

            )
}



