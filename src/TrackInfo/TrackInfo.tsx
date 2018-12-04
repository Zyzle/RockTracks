import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Result } from '../models/ITunes';

import './TrackInfo.scss';

interface TrackInfoState {
  trackId: any;
}

class TrackInfo extends PureComponent<RouteComponentProps, TrackInfoState> {

  constructor(props: RouteComponentProps<{id: string}>) {
    super(props);

    this.state = {
      trackId: props.match.params.id || 0
    }
  }

  render() {
    return (
      <b>In track-list: {this.state.trackId}</b>
    );
  }
}

export default TrackInfo;