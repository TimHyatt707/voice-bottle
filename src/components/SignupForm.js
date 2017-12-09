import React, { Component } from "react";
import { Text, Alert } from "react-native";
import { Actions } from "react-native-router-flux";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Spinner
} from "native-base";
import debug from "../api/debug";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      downServer: false,
      uniqueError: false,
      shortPass: false,
      emptyFields: false,
      loading: false,
      username: undefined,
      email: undefined,
      password: undefined
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._onChangeUsername = this._onChangeUsername.bind(this);
    this._onChangePassword = this._onChangePassword.bind(this);
    this._onChangeEmail = this._onChangeEmail.bind(this);
  }

  _onChangeUsername(username) {
    this.setState({ username: username });
  }

  _onChangeEmail(email) {
    this.setState({ email: email });
  }

  _onChangePassword(password) {
    this.setState({ password: password });
  }

  async _handleSubmit() {
    try {
      this.setState({ downServer: false });
      const email = this.state.email;
      const username = this.state.username;
      const password = this.state.password;
      if (!email || !username || !password) {
        this.setState({ uniqueError: false });
        return this.setState({ emptyFields: true });
      } else if (password.length < 6) {
        this.setState({ uniqueError: false });
        this.setState({ emptyFields: false });
        return this.setState({ shortPass: true });
      } else {
        this.setState({ loading: true });
        const credentials = {};
        credentials.email = email;
        credentials.username = username;
        credentials.password = password;
        this.setState({ emptyFields: false });
        const createdUser = await this.props.onCreateUser(credentials);
        if (createdUser.id) {
          Alert.alert("Account successfully created!");
          return Actions.pop();
        } else {
          this.setState({ loading: false });
          throw new Error(createdUser);
        }
      }
    } catch (error) {
      return this.setState({ uniqueError: true });
      //TODO:add more error handling
      // else {
      //   return this.setState({ downServer: true });
      // }
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
          <Text style={{ marginLeft: "34%", color: "black" }}>
            {" "}
            Creating Account...{" "}
          </Text>
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
    if (this.state.shortPass) {
      errorMsg = (
        <Text style={{ color: "red", marginLeft: "25%" }}>
          {" "}
          Password must be at least 6 characters{" "}
        </Text>
      );
    }
    if (this.state.uniqueError) {
      errorMsg = (
        <Text style={{ color: "red", marginLeft: "19%" }}>
          {" "}
          Email and username must be unique!{" "}
        </Text>
      );
    }
    if (this.state.downServer) {
      errorMsg = (
        <Text style={{ color: "red", marginLeft: "25%" }}>
          {" "}
          Server is down!{" "}
        </Text>
      );
    }
    return (
      <Content>
        {errorMsg}
        <Form style={{ margin: 10, marginRight: 15 }}>
          <Item error={this.state.uniqueError || this.state.emptyFields}>
            <Input placeholder="Email" onChangeText={this._onChangeEmail} />
          </Item>
          <Item error={this.state.uniqueError || this.state.emptyFields}>
            <Input
              placeholder="Username"
              onChangeText={this._onChangeUsername}
            />
          </Item>
          <Item
            error={
              this.state.passwordError ||
              this.state.emptyFields ||
              this.state.shortPass
            }
          >
            <Input
              placeholder="Password"
              onChangeText={this._onChangePassword}
              secureTextEntry={true}
            />
          </Item>
        </Form>
        <Button block info style={{ margin: 10 }} onPress={this._handleSubmit}>
          <Text> Create Account </Text>
        </Button>
      </Content>
    );
  }
}
