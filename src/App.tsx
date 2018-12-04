import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import TrackList from './TrackList/TrackList';
import TrackInfo from './TrackInfo/TrackInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={TrackList} />
          <Route path="/:id" component={TrackInfo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
