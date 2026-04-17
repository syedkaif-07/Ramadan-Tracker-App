import React, { useState } from 'react'
import Header from './Header'
import Banner from './Banner'
import Card from './Card'
import QSCardContainer from './QSCardContainer'
import { ArrowUpRight } from 'lucide-react'
import EidCounter from './EidCounter'
import ActiveGoals from './ActiveGoals'

export default function DashboardContent() {

    return (

        <div className='border border-red-500 w-full p-8  '>
            <Banner />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:md-cols-2 xl:grid-cols-4 gap-6 ">
                <Card title={'FASTING'} showProgress={true} completedDays={0} Slash={"/"} totalDays={30} para={"Days Completed"} />
                <Card title={'Quran'} showProgress={true} completedDays={0} Per={"%"} para={"0 of 604 Pages"} />
                <Card title={'Charity'} showProgress={false} completedDays={"$0"} para={"Total Donated"} Arrow={< ArrowUpRight />} Icon={"Keep it up!"} />
                <Card title={'Prayers'} showProgress={true} completedDays={0} para={"Prayers Logged"} />
            </div>

            {/* QuickShortCard */}
            <div className='  border-white h-50 bg-white shadow-xl rounded-3xl  w-full' >
                <QSCardContainer />
            </div>

            {/* Active Goals */}

            <div className='grid grid-cols-12  '>
             <div className='col-span-8'>
                   <ActiveGoals />
             </div>
            </div>

          

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



