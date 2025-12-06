import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {users.map(u => <p key={u.id}>{u.title}</p>)}
    </div>
  );
}

export default App;
