import { useEffect, useRef, useState } from 'react';
import TrafficLight from './TrafficLight';


function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef<(() => void) | undefined>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval and clean up on unmount.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id); // Cleanup on unmount or when delay changes
    }
    return undefined
  }, [delay]);
}


export function App() {
  const [seconds, setSeconds] = useState(0);

  useInterval(() => {
    setSeconds(prev => prev + 1);  // Increment the seconds every 1000ms (1 second)
  }, 1000);

  return (
    <div>
      <p>Elapsed time: {seconds} seconds</p>
      <div className="wrapper">
        <TrafficLight />
      </div>
    </div>
  );
}

export default App;
