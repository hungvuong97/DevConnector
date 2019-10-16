import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
// import promiseMiddleWare from 'redux-promise';
// const sagaMiddleware = createSagaMiddleware();

// // const initialState = {};

// // const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware, logger),
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// );
// sagaMiddleware.run(rootSaga);

// export default store;


export default function createStoreWithMiddleware() {
  // Define middlewares to include
  const sagaMiddleware = createSagaMiddleware();
  // Add all middlewares into an array

  // Add the Redux dev tools and middleware code together


  // Create a store with the reducers and middleware
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  // Run the Redux Saga middleware listeners
  sagaMiddleware.run(rootSaga);

  return store;
}