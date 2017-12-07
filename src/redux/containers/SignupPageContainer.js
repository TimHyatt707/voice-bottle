import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import SignupPage from "../../components/SignupPage";

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onCreateUser = user => dispatch(createUserProcess(user))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(SignupPage);
