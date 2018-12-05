import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './App.scss';

import { search } from './actions';
import { trackListReducer } from './reducer';
import rootSaga from './sagas';
import TrackListContainer from './containers/TrackListContainer';
import TrackInfoContainer from './containers/TrackInfoContainer';

const sagaMiddleware = createSagaMiddleware();
// If we had multiple reducers I would combine them with combineReducers
const store = createStore(trackListReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
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
