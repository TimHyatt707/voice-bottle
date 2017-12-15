import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import MessagesPage from "../../components/MessagesPage";
import getPinsProcess from "../thunks/getPinsProcess";
import deletePinProcess from "../thunks/deletePinProcess";

function mapStateToProps(state, ownProps) {
  return {
    id: state.id,
    token: state.token,
    markers: state.markers
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getPins: (id, token) => dispatch(getPinsProcess(id, token)),
    onDeletePin: (id, token) => dispatch(deletePinProcess(id, token))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(MessagesPage);
