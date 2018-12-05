import { ActionCreator, Action } from "redux";

export const SEARCH_TRACKS = '[Tracks] Begin search';
export const SEARCH_SUCCESS = '[Tracks] Search success';
export const SEARCH_FAILURE = '[Tracks] Search failure';

export function search() {
  return {
    type: SEARCH_TRACKS
  };
}

export function searchSuccess(results: any) {
  return {
    type: SEARCH_SUCCESS,
    results
  };
}

export function searchFailure(error: Error) {
  return {
    type: SEARCH_FAILURE,
    error
  };
}

