import { errorTypes } from "../actions";

const initalState = {
  isFetching: false
};
export default (state = initalState, action) => {
  switch (action.type) {
    case errorTypes.PENDING:
      return {
        ...state,
        isFetching: true
      };
    case errorTypes.DONE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};
