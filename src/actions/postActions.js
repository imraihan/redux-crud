import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}/posts`);
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const addPost = (postData) => async (dispatch) => {
  const response = await axios.post(`${API_URL}/posts`, postData);
  dispatch({ type: "ADD_POST", payload: response.data });
};

export const editPost = (postData) => async (dispatch) => {
  const response = await axios.put(`${API_URL}/posts/${postData.id}`, postData);
  dispatch({ type: 'EDIT_POST', payload: response.data });
};
export const updatePost = (postId, postData) => async (dispatch) => {
  const response = await axios.put(`${API_URL}/posts/${postId}`, postData);
  await dispatch(fetchPosts()); // Refetch the list of posts after update
  dispatch({ type: 'UPDATE_POST', payload: response.data });
};
export const deletePost = (postId) => async (dispatch) => {
  await axios.delete(`${API_URL}/posts/${postId}`);
  dispatch({ type: "DELETE_POST", payload: postId });
};
