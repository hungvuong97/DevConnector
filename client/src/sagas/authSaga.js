import {
  take,
  put,
  call,
  takeEvery,
  takeLatest,
  all
} from "redux-saga/effects";
import { setCurrentUser } from "../actions/authAction";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import axios from "axios";
import * as authTypes from "../actions/type";
import { errorTypes } from "../actions";
import { weekdaysShort } from "moment";

// import { GET_ERRORS, SET_CURRENT_USER } from './type';

function* workAuthLogin(action) {
  try {
    // yield put({
    //   type: errorTypes.PENDING
    // });
    const res = yield call(
      axios.post,
      "http://127.0.0.1:5000/api/users/login",
      action.payload
    );
    // Save to localStorage
    console.log(res.data);
    const { token } = res.data;
    // // Set token to ls
    localStorage.setItem("jwtToken", token);
    // // Set token to Auth header
    setAuthToken(token);
    // // Decode token to get user data
    const decoded = jwt_decode(token);
    yield put({ type: authTypes.LOGIN_SUCCESS, payload: decoded });
  } catch (error) {
    yield put({ type: authTypes.LOGIN_ERROR });
  } finally {
    yield put({
      type: errorTypes.DONE
    });
  }
}

export function* watchLogin() {
  yield takeLatest(authTypes.LOGIN_REQUEST, workAuthLogin);
}

function* workAuthRegister(action) {
  try {
    yield put({
      type: errorTypes.PENDING
    });
    const res = yield call(
      axios.post,
      "http://127.0.0.1:5000/api/users/register",
      action.payload
    );
    yield put({ type: "REGISTER_SUCCESS" });
  } catch (err) {
    yield put({ type: errorTypes.DONE });
  }
}

export function* watchRegister() {
  yield takeLatest("REGISTER_REQUEST", workAuthRegister);
}

export function* watchSetCurrentUser() {
  yield takeLatest("SET_CURRENT_USER", workerSetCurrentUser);
}

function* workerSetCurrentUser(action) {
  try {
    yield put({ type: errorTypes.PENDING });
    yield put({ type: "SET_CURRENT_USER_SUCCESS", payload: action.payload });
  } catch (err) {
    yield put({ type: "errors" });
  } finally {
    yield put({ type: errorTypes.DONE });
  }
}

export function* watchLogout() {
  yield takeLatest(authTypes.LOGOUT, workerLogOut);
}

function* workerLogOut(action) {
  try {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    yield call(action.payload, "/");
  } catch (err) {
    yield put({ type: "errors" });
  } finally {
  }
}
