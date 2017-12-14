import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Body,
  Left,
  Title,
  Button,
  Right
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this._handleRecord = this._handleRecord.bind(this);
    this._handleMessages = this._handleMessages.bind(this);
  }

  _handleRecord() {
    Actions.record();
  }

  _handleMessages() {
    console.log("WIP");
  }

  render() {
    const recordBtn = (
      <TouchableOpacity>
        <Button danger rounded>
          <Text onPress={this._handleRecord}> RECORD </Text>
        </Button>
      </TouchableOpacity>
    );
    const messagesBtn = (
      <TouchableOpacity>
        <Button success rounded>
          <Text onPress={this._handleMessages}> MESSAGES </Text>
        </Button>
      </TouchableOpacity>
    );
    return (
      <Header style={{ zIndex: 1 }}>
        <Left>
          <Title>
            {this.props.title} <Icon name="flask" />
          </Title>
        </Left>
        <Body>{this.props.recordingToggle ? recordBtn : null}</Body>
        <Right>{this.props.recordingToggle ? messagesBtn : null}</Right>
      </Header>
    );
  }
}
