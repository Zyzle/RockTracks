import { SearchResults } from './models/ITunes';

export const SEARCH_TRACKS = '[Tracks] Begin search';
export const SEARCH_SUCCESS = '[Tracks] Search success';
export const SEARCH_FAILURE = '[Tracks] Search failure';

// NOTE this would probably be better if I could use classes rather
// than functions for the actions as the extra `type` aliases
// wouldn't be required for the discriminated union but I couldn't
// make class based actions work with redux
export type Search = { type: typeof SEARCH_TRACKS };
/**
 * Action intent: to trigger a search request from the API service
 *
 * @export
 * @returns {Search}
 */
export function search(): Search {
  return {
    type: SEARCH_TRACKS
  };
}

export type SearchSuccess = { type: typeof SEARCH_SUCCESS, payload: SearchResults };
/**
 * Action intent: add the results of a successful search to the application state
 *
 * @export
 * @param {SearchResults} results
 * @returns {SearchSuccess}
 */
export function searchSuccess(results: SearchResults): SearchSuccess {
  return {
    type: SEARCH_SUCCESS,
    payload: results
  };
}

export type SearchFailure = { type: typeof SEARCH_FAILURE, payload: Error };
/**
 * Action intent: notify the state that an error has occurred in the search API
 * call and report this 
 *
 * @export
 * @param {Error} error
 * @returns {SearchFailure}
 */
export function searchFailure(error: Error): SearchFailure {
  return {
    type: SEARCH_FAILURE,
    payload: error
  };
}

// Union type for actions relating to track list
export type Actions = Search | SearchSuccess | SearchFailure;
