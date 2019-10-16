import {
  take,
  put,
  call,
  takeEvery,
  takeLatest,
  all
} from "redux-saga/effects";
// import { setCurrentUser } from "../actions/authAction";
// import setAuthToken from "../utils/setAuthToken";
// import jwt_decode from "jwt-decode";
import axios from "axios";
// import * as authTypes from "../actions/type";
import { errorTypes } from "../actions";
import { func } from "prop-types";
// import { weekdaysShort } from "moment";

export function* watchPost() {
  yield takeLatest("ADDCOMMENT", workerPost);
}

function* workerPost(action) {
  try {
    yield put({ type: errorTypes.PENDING });
    const res = yield call(
      axios.post,
      `http://127.0.0.1:5000/api/posts/comment/${action.payload.postId}`,
      action.payload.commentData
    );
    yield put({ type: "ADDCOMMENT_SUCCESS", payload: res.data });
  } catch (err) {
    yield put({ type: "errors" });
  } finally {
    yield put({ type: errorTypes.DONE });
  }
}

export function* watchAddPost(action) {
  yield takeLatest("ADD_POST", workerAddPost);
}

function* workerAddPost(action) {
  try {
    yield put({ type: errorTypes.PENDING });
    const res = yield call(
      axios.post,
      `http://127.0.0.1:5000/api/posts`,
      action.payload.postData
    );
    yield put({ type: "ADD_POST_SUCCESS", payload: res.data });
  } catch (err) {
    yield put({ type: "error" });
  } finally {
    yield put({ type: errorTypes.DONE });
  }
}

export function* watchGetPosts() {
  yield takeLatest("GET_POSTS", workerGetPosts);
}

function* workerGetPosts() {
  try {
    yield put({ type: errorTypes.PENDING });
    const res = call(axios.get, `http://127.0.0.1:5000/api/posts`);
    yield put({ type: "GET_POSTS_SUCCESSS", payload: res.data });
  } catch (err) {
    yield put({ type: "error" });
  } finally {
    yield put({ type: errorTypes.DONE });
  }
}

export function* watchGetPost() {
  yield takeLatest("GET_POST", workerGetPost);
}

function* workerGetPost(id) {
  try {
    yield put({ type: errorTypes.PENDING });
    const res = yield call(axios.get, `http://127.0.0.1:5000/api/posts/${id}`);
    yield put({ type: "GET_POST_SUCCESS", payload: res.data });
  } catch (err) {
    yield put({ type: "error" });
  } finally {
    yield put({ type: errorTypes.DONE });
  }
}

export function* watchAddLike() {
  yield takeLatest("ADD_LIKE", workerAddLike);
}

function* workerAddLike(id) {
  try {
    yield put({ type: errorTypes.PENDING });
    const res = call(axios.post, `http://127.0.0.1:5000/api/posts/like/${id}`);
    yield put({ type: "ADD_LIKE_SUCCESS", payload: res.data });
  } catch (err) {
    yield put({ type: "error" });
  } finally {
    yield put({ type: errorTypes.DONE });
  }
}

export function* watchDeletePost() {
  yield takeLatest("DELETE_POST", workerDeletePost)
}

function* workerDeletePost(id){
  try{
    
  }
}
