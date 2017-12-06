import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import LoginPage from "../../components/LoginPage";

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// const onDidMount = lifecycle({
//   async componentDidMount() {}
// });

export default compose(connectToStore)(LoginPage);
