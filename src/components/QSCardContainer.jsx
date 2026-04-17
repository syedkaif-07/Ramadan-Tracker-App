import { Calendar, Goal, Heart, Moon, Target } from "lucide-react";
import QSCard from "./QSCard";
import EidCounter from "./EidCounter";

export default function QSCardContainer() {

  return (
    <>
    <div className=" border border-blue-400">
      <div >
        <h2 className="text-2xl text-black font-bold p-5" >Qucik Shorts</h2>
      </div>
      <div className="grid-cols-12 grid-rows-12">
      <div className="grid grid-cols-6  gap-6 ">
        <QSCard color="bg-red-200" Icon={<Calendar />} title={"Daily Log"} />
        <QSCard color="bg-blue-200" Icon={<Moon />} title={"Duas"} />
        <QSCard color="bg-red-100" Icon={<Target />} title={"My Goals"} />
        <QSCard color="bg-red-100" Icon={<Heart />} title={"Donate"} />

        {/* Counter Div */}
        <div className="col-span-2 row-span-12">
       <div className="h-full ">
           <EidCounter />
       </div>
        </div>
        </div>
      </div>
      </div>
    </>

  );
}