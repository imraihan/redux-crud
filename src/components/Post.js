import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost, deletePost } from '../actions/postActions';

const Post = ({ match }) => {
  const dispatch = useDispatch();
  const post = useSelector(state =>
    state.posts.post ? state.posts.post : null
  );

  useEffect(() => {
    dispatch(fetchPost(match.params.id));
  }, [dispatch, match.params.id]);

  const onDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={onDelete}>Delete</button>
        </>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default Post;