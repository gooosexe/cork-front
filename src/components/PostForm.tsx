import { useState } from "react";
import axios from "axios";

export default function PostForm() {
  const [username, setUsername] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      await axios.post("http://localhost:3000/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username (optional)" value={username} onChange={(e) => setUsername(e.target.value)} />
      <textarea placeholder="Write something..." value={content} onChange={(e) => setContent(e.target.value)} required />
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
      <button type="submit">Post</button>
    </form>
  );
}