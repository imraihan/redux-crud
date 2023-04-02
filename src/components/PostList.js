import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost } from '../actions/postActions';
import { Link } from 'react-router-dom';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <div>
      <h1>Posts</h1>
      <Link to="/add-post">Add Post</Link>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.id}</h2>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <Link to={`/edit-post/${post.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;