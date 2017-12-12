import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import MapPage from "../../components/MapPage";
import getLocationProcess from "../thunks/getLocationProcess";
import getNearbyMarkersProcess from "../thunks/getNearbyMarkersProcess";

function mapStateToProps(state, ownProps) {
  return {
    token: state.token,
    markers: state.markers,
    latitude: state.latitude,
    longitude: state.longitude
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getLocation: () => dispatch(getLocationProcess()),
    getNearbyMarkers: coordinates =>
      dispatch(getNearbyMarkersProcess(coordinates))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(MapPage);
