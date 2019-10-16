import isEmpty from "../validation/is-empty";
import { authTypes } from "../actions";

const initalState = {
  isAuthenticated: false,
  profile: {}
};

export default function(state = initalState, action) {
  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        profile: action.payload
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        isRegister: true
      };
    case "SET_CURRENT_USER_SUCCESS":
      return {
        ...state,
        isAuthenticated: true
      };
    case authTypes.LOGOUT:
      return {
        ...initalState
      };
    default:
      return state;
  }
}
