import { ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';

import { Actions, SEARCH_TRACKS, searchSuccess, SearchFailure, search, searchFailure } from './actions'
import { SearchResults } from './models/ITunes';

export const doSearch = (action$: Observable<Actions>) => action$.pipe(
  ofType(SEARCH_TRACKS),
  switchMap(() => {
    return ajax.getJSON<SearchResults>('https://itunes.apple.com/search?term=rock&media=music').pipe(
      map((result) => {
        return searchSuccess(result);
      }),
      catchError((e) => of(searchFailure(e)))
    );
  })
);