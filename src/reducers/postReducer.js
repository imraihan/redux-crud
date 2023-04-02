const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "EDIT_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
        post: action.payload,
      };
    case "UPDATE_POST":
      const updatedPost = action.payload;
      const updatedPosts = state.posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      );
      return {
        ...state,
        posts: updatedPosts,
        post: updatedPost,
      };
    case "DELETE_POST":
      const filteredPosts = state.posts.filter(
        (post) => post.id !== action.payload
      );
      return {
        ...state,
        posts: filteredPosts,
      };
    default:
      return state;
  }
};

export default postReducer;
