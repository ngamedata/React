import { configureStore } from "@reduxjs/toolkit/";
import createSagaMiddleware from "@redux-saga/core";
import MovieReducer from "./feature/movieSlice";
import rootSaga from "./feature/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movie: MovieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;
