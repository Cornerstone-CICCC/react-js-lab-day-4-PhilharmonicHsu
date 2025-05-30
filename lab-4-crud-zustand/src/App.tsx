import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import './App.css'
import Home from './pages/Home';
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog">
            <Route index element={<Blog />}/>
            <Route path=":postId" element={<PostDetail />} />
            <Route path="new" element={<NewPost />} />
            <Route path="edit/:postId" element={<EditPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
