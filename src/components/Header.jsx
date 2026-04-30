import { Menu, X, Sun, Moon, Timer, CheckSquare, Scroll, BookOpen, Target, Settings, LayoutDashboard, HeartHandshake } from "lucide-react";
export default function Header({ toggleMenu, menuOpen }) {
  
  return (
    <>
      {/* <div  > */}
        <div className="lg:hidden flex justify-between   bg-white p-3 shadow items-center ">
          <h2 className="text-2xl text-green-600">Ramadan Tracker </h2>
          <div onClick={toggleMenu} className="cursor-pointer">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      {/* </div> */}
    </>
  )
}