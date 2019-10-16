const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADDCOMMENT_SUCCESS":
      return {
        ...state,
        loading: true,
        post: action.payload
      };
    case "ADD_POST_SUCCESS":
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case "GET_POST_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case "ADD_LIKE_SUCCESS":
      return {
        ...state
      };
    default:
      return state;
  }
}
