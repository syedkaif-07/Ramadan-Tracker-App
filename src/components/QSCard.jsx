import { Calendar } from "lucide-react";

export default function QSCard({Icon,title,color}) {

  return (
  <div className={` flex flex-col rounded-2xl justify-center items-center p-5 m-3 ${color}`}>
     <p>{Icon}</p> 
      <h2 className="mt-3">{title}</h2>
  </div>

  );
}