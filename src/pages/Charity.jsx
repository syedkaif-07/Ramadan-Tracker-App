import React, { useState } from 'react'
import AddSidebar from '../components/AddSidebar';
import Header from '../components/Header';
import CharityCard from '../components/CharityCard';
import DonationCard from '../components/DonationCard';
import { Link, Heart, Utensils, Activity, Coins } from "lucide-react";
import AddDonation from '../components/AddDonation';
import RecentHistory from '../components/Recent History';
export default function Charity() {

    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }



    return (
        <>
            <div className="flex">
                <div className="lg:flex-1/4">
                    <AddSidebar menuOpen={menuOpen} />
                </div>

                <div className="lg:flex-3/3  h-full   flex-3/4  ">
                    <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />



                    <div className='grid  grid-cols-6 gap-6 p-5 pt-10'>

                        <div className='lg:col-span-2 col-span-6'>
                            <CharityCard />
                        </div>

                        <div className='lg:col-span-1  col-span-3'>
                            <DonationCard Coins={<Coins className='text-purple-400 bg-purple-100 rounded-full p-1.5' size={30} />} title={"Zakat"} Money={"$0"} />
                        </div>

                        <div className='lg:col-span-1  col-span-3'>
                            <DonationCard Coins={<Heart className='text-red-400 bg-red-100 rounded-full p-1.5' size={30} />} title={"SADAQAH"} Money={"$0"} />
                        </div>

                        <div className='lg:col-span-1  col-span-3'>
                            <DonationCard Coins={<Utensils className='text-orange-400 bg-orange-100 rounded-full p-1.5' size={30} />} title={"IFTAR"} Money={"$0"} />
                        </div>

                        <div className='lg:col-span-1  col-span-3'>
                            <DonationCard Coins={<Activity className='text-blue-400 bg-blue-100 rounded-full p-1.5' size={30} />} title={"OTHER"} Money={"$0"} />
                        </div>

                        {/* AddDonation */}

                        <div className='lg:col-span-2 col-span-6 '>
                            <AddDonation />
                        </div>

                        <div className='lg:col-span-4 col-span-6 '>
                            <RecentHistory />
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}
