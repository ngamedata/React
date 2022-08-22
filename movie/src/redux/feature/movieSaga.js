import { call, put, takeLatest, fork } from "redux-saga/effects";
import { getMovies, setMovies, setMovie, getMovie } from "./movieSlice";
import { fetchMovies,fetchMovie } from "./api";
function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload;
    const response = yield call(fetchMovies, movieName);
    if (response.status === 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}
function* onClickMoviesAsync({ payload }) {
  try {
    const movieName = payload;
    console.log(movieName)
    const response = yield call(fetchMovie, movieName);
    if (response.status === 200) {
      yield put(setMovie({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

function* onClickMovie() {
  yield takeLatest(getMovie.type, onClickMoviesAsync);
}

export const movieSaga = [fork(onLoadMovies), fork(onClickMovie)];
