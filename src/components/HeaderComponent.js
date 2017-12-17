import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Body,
  Left,
  Title,
  Button,
  Right,
  Icon
} from "native-base";
import { Actions } from "react-native-router-flux";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this._handleRecord = this._handleRecord.bind(this);
    this._handleMessages = this._handleMessages.bind(this);
    this._handleBack = this._handleBack.bind(this);
  }

  _handleRecord() {
    Actions.record();
  }

  _handleMessages() {
    Actions.messages();
  }

  _handleBack() {
    Actions.pop();
  }

  render() {
    const recordBtn = (
      <TouchableOpacity>
        <Button danger rounded onPress={this._handleRecord}>
          <Text> RECORD </Text>
        </Button>
      </TouchableOpacity>
    );
    const messagesBtn = (
      <TouchableOpacity>
        <Button success rounded onPress={this._handleMessages}>
          <Text> MESSAGES </Text>
        </Button>
      </TouchableOpacity>
    );
    return (
      <Header style={{ zIndex: 1 }}>
        <Left
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        >
          {this.props.hasBack ? (
            <Icon
              name="arrow-back"
              style={{ color: "white", marginRight: "25%" }}
              onPress={this._handleBack}
            />
          ) : null}
          <Title>{this.props.title}</Title>
        </Left>
        <Body>{this.props.recordingToggle ? recordBtn : null}</Body>
        <Right>{this.props.recordingToggle ? messagesBtn : null}</Right>
      </Header>
    );
  }
}
