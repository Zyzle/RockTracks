import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Duration, DateTime } from 'luxon';

import { Result } from '../models/ITunes';

import './TrackInfo.scss';

type TrackInfoProps =  Result & RouteComponentProps;

class TrackInfo extends PureComponent<TrackInfoProps> {

  constructor(props: TrackInfoProps) {
    super(props);
  }

  parsedTrackTime() {
    return Duration.fromMillis(this.props.trackTimeMillis).toFormat('m:ss');
  }

  parsedReleaseDate() {
    return DateTime.fromISO(this.props.releaseDate).toLocaleString(DateTime.DATE_SHORT);
  }

  render() {
    return (
      <div>
        <img src={this.props.artworkUrl100} alt={this.props.trackName} />
        <h1>{this.props.trackName}</h1>
        <h2>{this.props.artistName}</h2>
        <p>Price: ${this.props.trackPrice}</p>
        <p>Runtime: {this.parsedTrackTime()} - Release Date: { this.parsedReleaseDate() }</p>
        <a target="_blank" href={this.props.trackViewUrl}><button>more details</button></a>
      </div>
    );
  }
}

export default TrackInfo;