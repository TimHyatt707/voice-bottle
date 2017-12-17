import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Text, Alert } from "react-native";
import { Content, Form, Item, Input, Button, Spinner } from "native-base";

export default class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyFields: false,
      hasError: false,
      loading: false,
      name: null,
      message: null
    };
    this._onChangeName = this._onChangeName.bind(this);
    this._onChangeMessage = this._onChangeMessage.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _onChangeName(name) {
    this.setState({ name: name });
  }

  _onChangeMessage(message) {
    this.setState({ message: message });
  }

  async _handleSubmit() {
    try {
      const name = this.state.name;
      const message = this.state.message;
      if (!name || !message) {
        return this.setState({ emptyFields: true });
      } else {
        this.setState({ loading: true });
        this.setState({ emptyFields: false });
        const credentials = {};
        credentials.name = name;
        credentials.message = message;
        const updatedMessage = await this.props.onUpdateMessage(
          this.props.selectedPinId,
          credentials,
          this.props.token
        );
        this.setState({ loading: false });
        Actions.pop();
      }
    } catch (error) {
      this.setState({ loading: false });
    }
  }

  render() {
    let errorMsg = null;
    if (this.state.loading)
      return (
        <Content
          style={{
            marginTop: "50%"
          }}
        >
          <Spinner color="blue" />
        </Content>
      );
    if (this.state.emptyFields) {
      errorMsg = (
        <Text style={{ color: "red", marginLeft: "25%" }}>
          {" "}
          Please fill out all fields{" "}
        </Text>
      );
    }
    return (
      <Content>
        {errorMsg}
        <Form style={{ margin: 10, marginRight: 15 }}>
          <Item error={this.state.emptyFields}>
            <Input placeholder="Name" onChangeText={this._onChangeName} />
          </Item>
          <Item error={this.state.emptyFields}>
            <Input placeholder="Message" onChangeText={this._onChangeMessage} />
          </Item>
        </Form>
        <Button block info style={{ margin: 10 }} onPress={this._handleSubmit}>
          <Text> Update Message </Text>
        </Button>
      </Content>
    );
  }
}
