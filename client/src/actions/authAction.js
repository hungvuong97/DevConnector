import { SET_CURRENT_USER, LOGIN_REQUEST, LOGOUT } from "./type";

//register user
export const registerUser = userData => ({
  type: "REGISTER_REQUEST",
  payload: userData
});

export const loginUser = userData => ({
  type: LOGIN_REQUEST,
  payload: userData
});

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = payload => ({
  type: LOGOUT,
  payload
});
