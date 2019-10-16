import axios from "axios";
import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER
} from "./type";

export const createProfile = profileData => ({
  type: PROFILE_LOADING,
  payload: profileData
});

export const getCurrentProfile = () => ({
  type: GET_PROFILE
});

export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE
});
