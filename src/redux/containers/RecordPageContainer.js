import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import RecordPage from "../../components/RecordPage";
import createPinProcess from "../thunks/createPinProcess";
import getNearbyMarkersProcess from "../thunks/getNearbyMarkersProcess";

function mapStateToProps(state, ownProps) {
  return {
    id: state.id,
    token: state.token,
    latitude: state.latitude,
    longitude: state.longitude
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmitMessage: (id, pin, token) =>
      dispatch(createPinProcess(id, pin, token)),
    getNearbyMarkers: coordinates =>
      dispatch(getNearbyMarkersProcess(coordinates))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(RecordPage);
