import "regenerator-runtime/runtime";
import { all, fork } from "redux-saga/effects";
import * as authSaga from "./authSaga";
import * as profileSaga from "./profileSaga";
import * as postSaga from "./postSaga"

// Root sagas
// Single entry point to start all sagas at once
export default function* rootSaga() {
  yield all(
    [...Object.values(authSaga), ...Object.values(profileSaga),...Object.values(postSaga)].map(fork)
  );
}
