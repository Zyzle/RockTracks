import { all, call, put, takeLatest } from 'redux-saga/effects';

import { SEARCH_TRACKS, searchSuccess, searchFailure } from './actions';

function* fetchData() {
  try {
    const response = yield call(fetch, 'https://itunes.apple.com/search?term=rock&media=music');
    const results = yield response.json();
    yield put(searchSuccess(results));
  }
  catch (e) {
    yield put(searchFailure(e));
  }
}

function* doSearch() {
  yield takeLatest(SEARCH_TRACKS, fetchData);
}


export default function* rootSaga() {
  yield all([doSearch()]);
}