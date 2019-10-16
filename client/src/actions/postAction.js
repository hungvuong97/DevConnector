export const addComment = (postId, commentData) => ({
  type: "ADDCOMMENT",
  payload: { postId, commentData }
});

export const addPost = postData => ({
  type: "ADD_POST",
  payload: { postData }
});

export const getPosts = () => ({
  type: "GET_POSTS"
});

export const getPost = id => ({
  type: "GET_POST",
  payload: { id }
});

export const addLike = id => ({
  type: "ADD_LIKE",
  payload: { id }
});

export const deletePost = id => ({
  type: "DELETE_POST",
  payload: { id }
});
