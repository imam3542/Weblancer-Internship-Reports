import { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function handleAdd() {
    if (task !== "") {
      setList([...list, task]);
      setTask("");
    }
  }

  return (
    <div>
      <h2>To Do List</h2>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {list.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
