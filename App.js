import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={LoginPage} title="Login" />
          <Scene key="signup" component={SignupPage} title="Signup" />
          <Scene key="map" component={MapPage} title="Map" />
          <Scene key="record" component={RecordPage} title="Record" />
        </Stack>
      </Router>
    );
  }
}
