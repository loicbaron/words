import { useEffect, useState } from 'react';

enum Colors {
  Green = 'green',
  Yellow = 'yellow',
  Red = 'red',
}

type ColorProps = { next: Colors, wait: number }

type ColorMap = {
  'green': ColorProps;
  'yellow': ColorProps;
  'red': ColorProps
}

const colorsMap: ColorMap = {
  'green': { next: Colors.Yellow, wait: 3000 },
  'yellow': { next: Colors.Red, wait: 2000 },
  'red': { next: Colors.Green, wait: 4000 },
}

export default function TrafficLight() {
  const [color, setColor] = useState(Colors.Red);
  useEffect(() => {
    const id = setTimeout(() => {
      setColor(colorsMap[color].next)
    }, colorsMap[color].wait)
    return (() => clearTimeout(id))
  }, [color])

  return (<div className="traffic-light-container">
    {Object.entries(colorsMap).map(([key]) => {
      return (<div key={key} className={`traffic-light`} style={{ backgroundColor: key === color ? key : 'gray' }} />);
    })}
  </div>)
}
