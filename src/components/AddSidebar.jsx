import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon, Timer, CheckSquare, Scroll, BookOpen, Target, Settings, LayoutDashboard, HeartHandshake, Calendar } from "lucide-react";
import Header from './Header';
import Banner from './Banner';
import Card from './Card';
import { ArrowUpRight } from "lucide-react";
import QSCardContainer from './QSCardContainer';

function AddSidebar({ menuOpen }) {
    const [darkMode, setDarkMode] = useState(false)
    // const [menuOpen, setMenuOpen] = useState(false)
    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };


    return (

        <div
            className={` fixed h-full overflow-scroll  [scrollbar-width:none]   border-r border-r-gray-300 flex flex-col   top-0 left-0 w-80  bg-white shadow-md transform ${menuOpen ? "translate-x-0" : "-translate-x-full "
                } lg:translate-x-0 transition-transform duration-300 z-50 `}
        >
            <h2 className="p-4 text-2xl font-bold border-b border-gray-200"><span>🌙</span> Ibadah<span className='text-green-600'>Tracker</span></h2>

            <nav className="p-4 space-y-3 ">

                <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 ">
                    <LayoutDashboard size={18} /> Dashboard
                </a>
                <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                    <Calendar size={18} /> Profile
                </a>

                <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                    <BookOpen size={18} /> Quran Progress
                </a>

                <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                    <HeartHandshake size={18} /> Charity Log
                </a>

                <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                    <Target size={18} /> Goals
                </a>

                <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                    <Timer size={18} /> Eid CountDown
                </a>

                <a href="#" className="flex items-  center gap-3 p-2 rounded-lg hover:bg-gray-200">
                    <Scroll size={18} /> Goals
                </a>

                <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                    <Settings size={18} /> Settings
                </a>
                    
                <div className="fixed bottom-4  z-50">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="bg-lime-50 shadow py-2 px-3 cursor-pointer gap-1 rounded flex items-center hover:bg-gray-200 border border-gray-200 transition-all whitespace-nowrap"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        <span className="ml-1">Dark Mode</span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default AddSidebar

