import React, { Component } from "react";
import { Root } from "native-base";
import { Router, Stack, Scene } from "react-native-router-flux";
import { Provider } from "react-redux";
import setupStore from "./src/redux/setupStore";
import LoginPageContainer from "./src/redux/containers/LoginPageContainer";
import SignupPageContainer from "./src/redux/containers/SignupPageContainer";
import MapPageContainer from "./src/redux/containers/MapPageContainer";
import RecordPageContainer from "./src/redux/containers/RecordPageContainer";
import MessagesPageContainer from "./src/redux/containers/MessagesPageContainer";
import UpdateMessagePageContainer from "./src/redux/containers/UpdateMessagePageContainer";

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <Router>
            <Stack key="root">
              <Scene
                key="login"
                component={LoginPageContainer}
                hideNavBar={true}
              />
              <Scene
                key="signup"
                component={SignupPageContainer}
                hideNavBar={true}
              />
              <Scene key="map" component={MapPageContainer} hideNavBar={true} />
              <Scene
                key="record"
                component={RecordPageContainer}
                hideNavBar={true}
              />
              <Scene
                key="messages"
                component={MessagesPageContainer}
                hideNavBar={true}
              />
              <Scene
                key="update"
                component={UpdateMessagePageContainer}
                hideNavBar={true}
              />
            </Stack>
          </Router>
        </Provider>
      </Root>
    );
  }
}
