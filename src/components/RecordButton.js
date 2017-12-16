import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Text, Alert } from "react-native";
import { Content, Form, Item, Input, Button, Spinner } from "native-base";

export default class RecordButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      message: ""
    };

    this._changeName = this._changeName.bind(this);
    this._changeMessage = this._changeMessage.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  async _handleSubmit() {
    let pin = {};
    pin.name = this.state.name;
    pin.message = this.state.message;
    pin.coordinates = `${this.props.latitude},${this.props.longitude}`;
    const createdPin = await this.props.onSubmitMessage(
      this.props.id,
      pin,
      this.props.token
    );
    if (createdPin) {
      this.props.getNearbyMarkers({
        coordinates: `${this.props.latitude},${this.props.longitude}`
      });
      Actions.map();
    } else {
      Alert.alert("Invalid message");
    }
  }

  _changeName(name) {
    this.setState({ name: name });
  }

  _changeMessage(message) {
    this.setState({ message: message });
  }

  render() {
    return (
      <Content style={{ marginTop: "10%" }}>
        <Form>
          <Item>
            <Input
              placeholder="Name of Message"
              onChangeText={this._changeName}
            />
          </Item>
          <Item>
            <Input placeholder="Message" onChangeText={this._changeMessage} />
          </Item>
        </Form>
        <Button
          block
          success
          style={{ marginTop: "10%", marginLeft: "10%", width: "80%" }}
          onPress={this._handleSubmit}
        >
          <Text> Submit </Text>
        </Button>
      </Content>
    );
  }
}
