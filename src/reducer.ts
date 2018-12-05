import { Action } from "redux";

import * as Actions from './actions';
import { SearchResults } from './models/ITunes';
import { response } from './TMPResp';

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

export function trackListReducer(state: TracksState = initialState, action: Action) {
  switch (action.type) {
    case Actions.SEARCH_TRACKS:
      return {
        ...state,
        pending: true,
      };
    case Actions.SEARCH_SUCCESS:
      return {
        ...state,
        pending: false,
        results: (action as {type: string, results: {results: []}}).results.results,
        resultsCount: (action as { type: string, results:{ resultCount: number } }).results.resultCount
      };
    default:
      return state;
  }
}