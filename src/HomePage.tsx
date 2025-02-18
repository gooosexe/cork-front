import { useEffect, useState } from "react";
import './App.css'
import axios from "axios";
import { Post } from "./types/post.ts";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  // fetch posts from server
  useEffect(() => {
    axios.get<Post[]>("http://localhost:8080/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <nav>
        <a href="/post">New Post</a>
      </nav>
      <h1>the corkboard.</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <p><strong>{post.username || "anonymous"}</strong></p>
          <p>{post.content}</p>
          {post.image_url && <img src={post.image_url} alt="Post Image" width="300" />}
          <p><small>{post.created_at}q</small></p>
        </div>
      ))}
    </>
  );
}