import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './App.scss';

import TrackListContainer from './containers/TrackListContainer';
import TrackInfo from './TrackInfo/TrackInfo';
import { trackListReducer } from './reducer';
import rootSaga from './sagas';
import TrackInfoContainer from './containers/TrackInfoContainer';
import { search } from './actions';

const sagaMiddleware = createSagaMiddleware();
// If we had multiple reducers I would combine them with combineReducers
const store = createStore(trackListReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

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
