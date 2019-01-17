import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { TracksState } from '../reducer';
import { Result } from '../models/ITunes';
import TrackInfo from '../components/TrackInfo/TrackInfo';

const mapStateToProps = (state: TracksState, ownProps: RouteComponentProps<{id: string}>) => {
  const selectedTrack = state.results.filter((track: Result) => {
    return track.trackId === Number.parseInt(ownProps.match.params.id);
  });
  return selectedTrack[0];
}

const TrackInfoContainer = connect(mapStateToProps)(TrackInfo);

export default withRouter(TrackInfoContainer);