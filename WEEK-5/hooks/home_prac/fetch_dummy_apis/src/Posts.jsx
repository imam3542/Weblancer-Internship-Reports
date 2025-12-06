import { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(res.data); 
      } catch (e) {
        console.log("api error aa gaya", e);
      }
    }
    getPosts();
  }, []);

  return (
    <div>
      <h3>Posts API Data</h3>
      {posts.map(p => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}

export default Posts;
