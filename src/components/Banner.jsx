import { Menu, X, Sun, Moon, Timer, CheckSquare, Scroll, BookOpen, Target, Settings, LayoutDashboard, HeartHandshake, Book, Calendar } from "lucide-react";

export default function Banner() {

    return (
            <div className=" border border-red-500  flex items-center justify-center "> 
                <div className=" relative bg-[#0B9580] text-white p-15 rounded-2xl w-full ">
                <Moon className="bg-[#09957900]  absolute top-4 right-4 text-cyan-200 z-0" size={170} />
                <h2 className="text-2xl">Salaam, Guest</h2>
                <p className="text-[#9CE0C6] mx-4 my-6 opacity-90">"The month of Ramadan is that in which was revealed the Quran, a <br /> guidance for the people and clear proofs of guidance and <br /> criterion."</p>
                <div className="flex gap-5 mx-4  w-full">
                    <button className="  cursor-pointer flex gap-1 items-center bg-white px-5 py-2.5 text-green-950 rounded-2xl"><Calendar className="text-[#099578]" /> Log Today</button>
                    <button className="cursor-pointer flex gap-1 items-center bg-transparent  px-5 py-2.5 text-white rounded-2xl border border-green-300"><BookOpen /> Read Quran</button>
                </div>
            </div>
        </div>

    )
}