import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE
} from "../actions/type";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      };
    case "CREATEPROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        profile: action.payload
      };
    case "GET_PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        profile: action.payload
      };
    case "CLEAR_CURRENT_PROFILE_SUCCESS":
      return {
        ...state,
        loading: true,
        profile: null
      };
    default:
      return state;
  }
}
