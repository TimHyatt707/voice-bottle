import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import { Provider } from "react-redux";
import setupStore from "./src/redux/setupStore";
import LoginPageContainer from "./src/redux/containers/LoginPageContainer";
import SignupPageContainer from "./src/redux/containers/SignupPageContainer";

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene
              key="login"
              component={LoginPageContainer}
              hideNavBar={true}
            />
            <Scene key="signup" component={SignupPageContainer} />
            {/* <Scene key="map" component={MapPage} />
            <Scene key="record" component={RecordPage} /> */}
          </Stack>
        </Router>
      </Provider>
    );
  }
}
