import { useState } from "react";
import { Menu, X, Timer, CheckSquare, Scroll, BookOpen, Target, Settings, LayoutDashboard, HeartHandshake, Sidebar } from "lucide-react";
import AddSidebar from "../components/AddSidebar";
import DashboardContent from "../components/DashboardContent";
import Header from "../components/Header";


function Dashboard() {

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <div className="flex">

        <div className="flex-1/4">
          <AddSidebar menuOpen={menuOpen} />
        </div>

        <div className="flex-3/3 ">
          <Header toggleMenu={toggleMenu} menuOpen={menuOpen}  />
          <DashboardContent toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </div>
      </div>
    </>

  );
}
export default Dashboard;