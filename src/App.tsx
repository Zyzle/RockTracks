import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import './App.scss';

import { search } from './actions';
import { trackListReducer } from './reducer';
import { doSearch } from './epics';
import TrackListContainer from './containers/TrackListContainer';
import TrackInfoContainer from './containers/TrackInfoContainer';

const rootEpic = combineEpics(
  doSearch
);

const epicMiddeware = createEpicMiddleware();

const rootReducer = combineReducers({
  trackList: trackListReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// If we had multiple reducers I would combine them with combineReducers
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      epicMiddeware
    )
  )
);

epicMiddeware.run(rootEpic);

// explicit dispatch here makes the API fetch process start as soon as the app loads
// it could be moved to a control elsewhere
store.dispatch(search());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={TrackListContainer} />
            <Route path="/:id" component={TrackInfoContainer} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
