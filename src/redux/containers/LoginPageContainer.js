import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import LoginPage from "../../components/LoginPage";
import loginUserProcess from "../thunks/loginUserProcess";
import getAuthenticationProcess from "../thunks/getAuthenticationProcess";

function mapStateToProps(state, ownProps) {
  return {
    token: state.token
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // onMount: () => dispatch(getAuthenticationProcess()),
    onLoginUser: credentials => dispatch(loginUserProcess(credentials))
  };
}
//TODO: ADD token authentication on bootup so user doesnt have to sign in everytime
// const willMount = lifecycle({
//   async componentWillMount() {
//     await this.props.onMount();
//   }
// });

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(LoginPage);
