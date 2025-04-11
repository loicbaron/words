/*
Progress Bar
https://www.greatfrontend.com/questions/user-interface/progress-bars/react?framework=react

Build an app where clicking the "Add" button adds a progress bar to the page.
The progress bar fills up gradually as soon as it is shown.

Requirements
Clicking on the "Add" button adds a progress bar to the page.
The progress bar starts filling up smoothly as soon as it is added
The progress bar takes approximately 2000ms to completely fill up.
*/

import { useEffect, useState } from "react";

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

const ProgressBarHandler = () => {
  const [display, setDisplay] = useState(false)
  const handleAdd = () => {
    setDisplay(true)
  }
  const handleCancel = () => {
    setDisplay(false)
  }
  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleCancel}>Cancel</button>
      {display && <ProgressBar />}
    </div>
  );
}

export default ProgressBarHandler
