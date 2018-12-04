import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { SearchResults } from '../models/ITunes';

import './TrackList.scss';

interface TrackState {
  results: SearchResults | null;
}

class TrackList extends PureComponent<{}, TrackState> {
  constructor(props: any) {
    super(props);

    this.state = {
      results: null
    };
  }
 
  componentDidMount() {
    fetch('https://itunes.apple.com/search?term=rock&media=music')
      .then((response: Response) => {
        return response.json();
      })
      .then((results: SearchResults) => {
        this.setState({results});
      });
  }
  
  render() {
    let content = <b>No results to display</b>;

    if (this.state.results && this.state.results.results) {
      const results = this.state.results.results.map((result) => {
        return (
          <div key={result.trackId}>
            <img src={result.artworkUrl30} alt={result.trackName}></img>
            <div>
              <div><Link to={`/${result.trackId}`}>{result.trackName}</Link></div> 
              <div>{result.artistName}</div>
              <div>{result.trackPrice}</div>
            </div>
          </div>
        );
      });
      content = <div>{results}</div>;
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}

export default TrackList;