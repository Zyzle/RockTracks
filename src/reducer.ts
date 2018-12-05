import * as SearchActions from './actions';
import { SearchResults } from './models/ITunes';

/**
 * The main state interface for the tracks list
 * part of the application
 *
 * @export
 * @interface TracksState
 * @extends {SearchResults}
 */
export interface TracksState extends SearchResults {
  pending: boolean;
  error: Error | null;
}

// The default state for the app
const initialState: TracksState = {
  pending: false,
  error: null,
  results: [],
  resultsCount: 0
};

/**
 * The reducer function for the tracks part of the application.
 *
 * @export
 * @param {TracksState} [state=initialState]
 * @param {SearchActions.Actions} action
 * @returns
 */
export function trackListReducer(state: TracksState = initialState, action: SearchActions.Actions) {
  switch (action.type) {
    case SearchActions.SEARCH_TRACKS:
      return {
        ...state,
        pending: true,
      };
    case SearchActions.SEARCH_SUCCESS:
      return {
        ...state,
        pending: false,
        results: action.payload.results,
        resultsCount: action.payload.resultsCount,
        error: null
      };
    case SearchActions.SEARCH_FAILURE:
      return {
        pending: false,
        results: [],
        resultsCount: 0,
        error: action.payload
      };
    default:
      return state;
  }
}