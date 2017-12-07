import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Text, Alert } from "react-native";
import { Content, Form, Item, Input, Button, Spinner } from "native-base";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyFields: false,
      hasError: false,
      loading: false,
      username: undefined,
      password: undefined
    };
    this._onChangeUsername = this._onChangeUsername.bind(this);
    this._onChangePassword = this._onChangePassword.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handlePress = this._handlePress.bind(this);
  }

  _onChangeUsername(username) {
    this.setState({ username: username });
  }

  _onChangePassword(password) {
    this.setState({ password: password });
  }

  _handlePress() {
    Actions.signup();
  }

  async _handleSubmit() {
    try {
      const username = this.state.username;
      const password = this.state.password;
      if (!username || password) {
        return this.setState({ emptyFields: true });
      } else {
        this.setState({ emptyFields: false });
        const credentials = Object.assign({}, username, password);
        const user = await this.props.onLoginUser(credentials);
        if (!user) {
          this.setState({ hasError: true });
        } else {
          //Temporary alert -- will later route user to the map page
          Alert.alert("Login Successful!");
        }
      }
    } catch (error) {
      this.setState({ hasError: true });
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
    if (this.state.hasError) {
      errorMsg = (
        <Text style={{ color: "red", marginLeft: "25%" }}>
          {" "}
          Bad username/password{" "}
        </Text>
      );
    }
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
          <Item error={this.state.hasError || this.state.emptyFields}>
            <Input
              placeholder="Username"
              onChangeText={this._onChangeUsername}
            />
          </Item>
          <Item error={this.state.hasError || this.state.emptyFields}>
            <Input
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={this._onChangePassword}
            />
          </Item>
        </Form>
        <Button block info style={{ margin: 10 }} onPress={this._handleSubmit}>
          <Text> Sign In </Text>
        </Button>
        <Button
          block
          warning
          style={{ margin: 10 }}
          onPress={this._handlePress}
        >
          <Text> Sign Up </Text>
        </Button>
      </Content>
    );
  }
}
