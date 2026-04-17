import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="text-2xl font-bold text-white">
      Time Left: {time}s
    </div>
  );
}