import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function Progress() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (start >= 100) {
        clearInterval(interval);
      } else {
        setStart((preCount) => preCount + 1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className="w-[400px] p-4 m-auto">
      <p className="font-bold text-2xl mb-5 font-mono">Progress Bar</p>
      <ProgressBar completed={start} />
      {start >= 100 ? <p>Completed</p> : <p>Loading</p>}
    </div>
  );
}

export default Progress;

