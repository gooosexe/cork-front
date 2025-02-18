import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import HomePage from './HomePage.tsx'
import PostForm from './PostForm.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post" element={<PostForm />} />
    </Routes>
  </BrowserRouter>
)
