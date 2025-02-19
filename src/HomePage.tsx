import { useEffect, useState } from "react";
import { DateTime } from "luxon";
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

  console.log(posts);
  if (!posts) return <p>Loading...</p>;
  else if (posts.length === 0) return (
    <>
      <nav>
        <a href="/post">new post</a>
      </nav>
      <h1>the corkboard.</h1>
      <p>no new posts.</p>
    </>
  );
  else return (
    <>
      <nav>
        <a href="/post">new post</a>
      </nav>
      <h1>the corkboard.</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <p className="user">{post.username || "anonymous"} @ {DateTime.fromISO(post.createdAt).toFormat("LLL dd, h:mm a").toLowerCase()}</p>
            <p className="content">{post.content}</p>
            {post.filePath && <img src={`http://localhost:8080${post.filePath}`} alt="post" style={{ maxWidth: "100%" }} />}
          </div>
        ))}
      </div>
    </>
  );
}