import axios from "axios";
import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import { actionTypes, failure, loadDataSuccess, tickClock } from "./actions";

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}
async function fetchApi(url) {
  return axios.get(url);
}
function* loadDataSaga() {
  try {
    const res = yield call(fetchApi, "https://dog.ceo/api/breeds/image/random");
    // const data = yield res.json()
    yield put(loadDataSuccess(res.data.message));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
  ]);
}

export default rootSaga;
