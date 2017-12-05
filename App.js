import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";
import { Provider } from "react-redux";
import setupStore from "./src/redux/setupStore";

const store = setupStore();

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="login" component={LoginPage} title="Login" />
            <Scene key="signup" component={SignupPage} title="Signup" />
            <Scene key="map" component={MapPage} title="Map" />
            <Scene key="record" component={RecordPage} title="Record" />
          </Stack>
        </Router>
      </Provider>
    );
  }
}
