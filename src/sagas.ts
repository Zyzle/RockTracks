import { all, call, put, takeLatest } from 'redux-saga/effects';

import { SEARCH_TRACKS, searchSuccess, searchFailure } from './actions';

/**
 * Generator function responsible for fetching the data from the 
 * API. Uses the native fetch implementation of the browser
 * but the cross-fetch package could be added to polyfill 
 * for older browsers or react native
 *
 */
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

/**
 * This generator function will trigger the fetching of
 * data from the API
 *
 */
function* doSearch() {
  yield takeLatest(SEARCH_TRACKS, fetchData);
}

/**
 * only one saga function is actually active in the app
 * but composition of multiple ones would happen here
 *
 * @export
 */
export default function* rootSaga() {
  yield all([doSearch()]);
}