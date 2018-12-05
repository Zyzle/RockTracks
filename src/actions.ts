import { SearchResults } from './models/ITunes';

export const SEARCH_TRACKS = '[Tracks] Begin search';
export const SEARCH_SUCCESS = '[Tracks] Search success';
export const SEARCH_FAILURE = '[Tracks] Search failure';

// NOTE this would probably be better if I could use classes rather
// than functions for the actions as the extra `type` aliases
// wouldn't be required for the discriminated union but I couldn't
// make class based actions work with redux
export type Search = { type: typeof SEARCH_TRACKS };
export function search(): Search {
  return {
    type: SEARCH_TRACKS
  };
}

export type SearchSuccess = { type: typeof SEARCH_SUCCESS, payload: SearchResults };
export function searchSuccess(results: SearchResults): SearchSuccess {
  return {
    type: SEARCH_SUCCESS,
    payload: results
  };
}

export type SearchFailure = { type: typeof SEARCH_FAILURE, payload: Error };
export function searchFailure(error: Error): SearchFailure {
  return {
    type: SEARCH_FAILURE,
    payload: error
  };
}

export type Actions = Search | SearchSuccess | SearchFailure;
