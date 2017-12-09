import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import MapPage from "../../components/MapPage";

function mapStateToProps(state, ownProps) {
  return {
    token: state.token
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(MapPage);
