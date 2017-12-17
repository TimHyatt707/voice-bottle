import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import UpdateMessagePage from "../../components/UpdateMessagePage";
import updateMessageProcess from "../thunks/updateMessageProcess";

function mapStateToProps(state, ownProps) {
  return {
    token: state.token,
    selectedPinId: state.selectedPinId
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onUpdateMessage: (id, message, token) =>
      dispatch(updateMessageProcess(id, message, token))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(UpdateMessagePage);
