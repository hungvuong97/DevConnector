import { errorTypes } from "../actions";
import {
  take,
  put,
  call,
  takeEvery,
  takeLatest,
  all
} from "redux-saga/effects";
import axios from "axios";

function* workerCreateProfile(action) {
  try {
    yield put({ type: errorTypes.PENDING });
    const res = yield call(
      axios.post,
      "http://127.0.0.1:5000/api/profile/",
      action.payload
    );
    console.log(res);
    yield put({ type: "CREATEPROFILE_SUCCESS", payload: res.data });
  } catch (err) {
    yield put({ type: "error" });
  } finally {
    yield put({ type: errorTypes.DONE });
  }
}
export function* watchCreateProfle() {
  yield takeLatest("PROFILE_LOADING", workerCreateProfile);
}

function* workerGetProfile() {
  try {
    yield put({ type: errorTypes.PENDING });
    const res = yield call(axios.get, "http://127.0.0.1:5000/api/profile/");
    yield put({ type: "GET_PROFILE_SUCCESS", payload: res.data });
  } catch (err) {
    yield put({ type: "error" });
  } finally {
    yield put({ type: errorTypes.DONE });
  }
}

export function* watchGetProFile() {
  yield takeLatest("GET_PROFILE", workerGetProfile);
}

export function* watchClearProFile() {
  yield takeLatest("CLEAR_CURRENT_PROFILE", workerClearProfile);
}

function* workerClearProfile() {
  try {
    yield put({ type: errorTypes.PENDING });
    yield put({ type: "CLEAR_CURRENT_PROFILE_SUCCESS" });
  } catch (err) {
    yield put({ type: "error" });
  } finally {
    yield put({ type: errorTypes.DONE });
  }
}
