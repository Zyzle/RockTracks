import React, { PureComponent } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Result} from '../../models/ITunes';
import { TracksState } from '../../reducer';

import './TrackList.scss';

// search function isn't actually used here anymore but will
// leave as an example of how dispatch props could be added 
// to the intersection
export type TrackListProps = TracksState & RouteComponentProps & {
  search :() => void
};

class TrackList extends PureComponent<TrackListProps> {
  constructor(props: TrackListProps) {
    super(props);
  }
  
  render() {
    let content = <b>No results to display</b>;

    if (this.props.results && this.props.results.length) {
      const results = this.props.results.map((result: Result) => {
        return (
          <div key={result.trackId}>
            <img src={result.artworkUrl30} alt={result.trackName}></img>
            <div>
              <div>{result.trackName}</div> 
              <div>{result.artistName}</div>
              <div>${result.trackPrice}</div>
            </div>
            <Link to={`/${result.trackId}`}>
              <button>track info</button>
            </Link>
            <hr />
          </div>
        );
      });
      content = <div>{results}</div>;
    }

    return (
      <div>
        <div>{this.props.pending ? 'Loading....' : ''}</div>
        {content}
      </div>
    )
  }
}

export default TrackList;