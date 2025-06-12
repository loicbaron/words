import { useState } from "react";

const DiceRoller = () => {
  const [dice, setDice] = useState(0);
  const [results, setResults] = useState<number[]>([]);
  const rollDice = () => {
    console.log(`Rolling ${dice} dice...`);
    const results = [];
    for (let i = 0; i < dice; i++) {
      const result = Math.floor(Math.random() * 6) + 1;
      results.push(result);
    }
    console.log(`Results: ${results.join(", ")}`);
    setResults(results);
  }
  return (
    <div>
      <h1>Dice Roller</h1>
      <div>
        <label htmlFor="dice">Number of Dice: </label>
        <input name="dice" id="dice" type="number" value={dice} onChange={e => setDice(Number(e.target.value))} />
        <button onClick={() => rollDice()}>Roll</button>
      </div>
      {results.length > 0 &&
        <div>
          <h2>Results</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}
export default DiceRoller;
