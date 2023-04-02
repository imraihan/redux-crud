import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
// import Post from "./components/Post";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="edit-post/:id" element={<EditPost />} />
          {/* <Route path="/edit/:id" element={<EditPost />} /> */}
          {/* <Route path="/posts/:id" element={<Post />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
