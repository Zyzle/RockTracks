import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { search } from '../actions';
import { TracksState } from '../reducer';
import TrackList from '../TrackList/TrackList';

const mapStateToProps = (state: TracksState, ownProps: RouteComponentProps) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    search: () => dispatch(search())
  };
};

const TrackListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);

export default withRouter(TrackListContainer);