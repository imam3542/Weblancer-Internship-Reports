import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data); 
      } catch (err) {
        console.log("error aa gaya", err);
      }
    }
    getUsers();
  }, []);

  return (
    <div>
      <h3>Users API Data</h3>
      {users.map(u => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}

export default Users;
