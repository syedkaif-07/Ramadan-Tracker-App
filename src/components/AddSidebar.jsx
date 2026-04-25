import React, { useState } from 'react'
// import { Link, NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon, Timer, CheckSquare, Scroll, BookOpen, Target, Settings, LayoutDashboard, HeartHandshake, Calendar } from "lucide-react";
// import Header from './Header';
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

    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 p-2 rounded-lg transition ${isActive
            ? "bg-green-100 text-green-700 font-semibold"
            : "hover:bg-gray-200"
        }`;

    return (

        <div
            className={` fixed h-full   border-r border-r-gray-300 flex flex-col   top-0 left-0 w-80  bg-white shadow-md transform ${menuOpen ? "translate-x-0" : "-translate-x-full "
                } lg:translate-x-0 transition-transform duration-300 z-50 `}
        >
            <h2 className="p-4 text-2xl font-bold border-b border-gray-200"><span>🌙</span> Ibadah<span className='text-green-600'>Tracker</span></h2>

            <nav className="p-4 space-y-3 ">

                <NavLink to="/" className={linkClass}>
                    <LayoutDashboard size={18} /> Dashboard
                </NavLink>

                <NavLink to="/Profile" className={linkClass}>
                    <Calendar size={18} /> Daily Tracker
                </NavLink>

                <NavLink to="/Quran" className={linkClass}>
                    <BookOpen size={18} /> Quran Progress
                </NavLink>

                <NavLink to="/Charity" className={linkClass}>
                    <HeartHandshake size={18} /> Charity Log
                </NavLink>

                <NavLink to="/goals" className={linkClass}>
                    <Target size={18} /> Goals
                </NavLink>

                <NavLink to="/eid-countdown" className={linkClass}>
                    <Timer size={18} /> Eid CountDown
                </NavLink>

                <NavLink to="/goals-list" className={linkClass}>
                    <Scroll size={18} /> Goals
                </NavLink>

                <NavLink to="/settings" className={linkClass}>
                    <Settings size={18} /> Settings
                </NavLink>
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

