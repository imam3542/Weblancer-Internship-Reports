import { useState, useEffect } from "react";
import axios from "axios";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      try {
        let r = await axios.get("https://jsonplaceholder.typicode.com/comments");
        setComments(r.data); 
      } catch (er) {
        console.log("error", er);
      }
    }
    getComments();
  }, []);

  return (
    <div>
      <h3>Comments API Data</h3>
      {comments.map(c => (
        <p key={c.id}>{c.email}</p>
      ))}
    </div>
  );
}

export default Comments;
