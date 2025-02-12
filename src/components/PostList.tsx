import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../types/post.ts";

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>("http://localhost:3000/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>5chan</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <p><strong>{post.username || "Anonymous"}</strong></p>
          <p>{post.content}</p>
          {post.image_url && <img src={post.image_url} alt="Post Image" width="300" />}
          <p><small>{new Date(post.created_at).toLocaleString()}</small></p>
        </div>
      ))}
    </div>
  );
}