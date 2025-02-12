import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import './App.css'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/post">Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post" element={<PostForm />} />
      </Routes>
    </Router>
  )
}

export default App
