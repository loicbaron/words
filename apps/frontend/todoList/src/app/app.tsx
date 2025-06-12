// Uncomment this line to use CSS modules
// import styles from './app.module.scss';

import { useState } from "react";
const initialList = [
  "Walk the dog",
  "Water the plants",
  "Wash dishes",
];
export function App() {
  const [list, setList] = useState<string[]>(initialList);
  const [newTask, setNewTask] = useState<string>("");
  const addTaskToList = () => {
    if (newTask.trim() === "") {
      return;
    }
    setList([...list, newTask]);
    setNewTask("");
  };
  const deleteTaskFromList = (index: number) => {
    setList(list.filter((_, i) => i !== index));
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addTaskToList();
    }
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" onChange={(e) => setNewTask(e.target.value)} onKeyDown={handleKeyDown} />
        <div>
          <button onClick={addTaskToList}>Submit</button>
        </div>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span>{item} </span>
            <button onClick={() => deleteTaskFromList(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
