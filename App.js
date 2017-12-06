import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import { Provider } from "react-redux";
import setupStore from "./src/redux/setupStore";
import LoginPage from "./src/components/LoginPage";

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="login" component={LoginPage} hideNavBar={true} />
            {/* <Scene key="signup" component={SignupPage} />
            <Scene key="map" component={MapPage} />
            <Scene key="record" component={RecordPage} /> */}
          </Stack>
        </Router>
      </Provider>
    );
  }
}
