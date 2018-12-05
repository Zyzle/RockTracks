import * as SearchActions from './actions';
import { SearchResults } from './models/ITunes';

export interface TracksState extends SearchResults {
  pending: boolean;
  error: Error | null;
}

const initialState: TracksState = {
  pending: false,
  error: null,
  results: [],
  resultsCount: 0
};

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