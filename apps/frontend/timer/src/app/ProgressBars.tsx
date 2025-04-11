/*
Progress Bars
https://www.greatfrontend.com/questions/user-interface/progress-bars/react?framework=react

Build an app where clicking the "Add" button adds a progress bars to the page.
The progress bars fill up gradually as soon as they are shown.

Requirements
Clicking on the "Add" button adds a progress bar to the page.
Each progress bar start filling up smoothly as soon as they're added
Each progress bar takes approximately 2000ms to completely fill up.
*/

import { ReactNode, useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const id = setTimeout(() => {
      if (progress < 100) setProgress(progress + 1)
    }, 20)
    return () => clearTimeout(id)
  }, [progress])
  return (
    <div style={{ width: '300px', backgroundColor: 'lightgray', height: '20px' }}>
      <div style={{ width: `${progress}%`, backgroundColor: 'green', height: '100%' }}>&nbsp;</div>
    </div>
  )
}

const ProgressBars = () => {
  const [progressBars, setProgressBars] = useState<ReactNode[]>([]);
  const handleAdd = () => {
    setProgressBars((prev) => [...prev, <ProgressBar key={prev.length} />]);
  };
  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      {progressBars.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default ProgressBars
