/*
https://www.greatfrontend.com/questions/user-interface/traffic-light/react?framework=react
Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:

Red light: 4000ms
Yellow light: 2000ms
Green light: 3000ms

You are free to exercise your creativity to style the appearance of the traffic light.
*/

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
