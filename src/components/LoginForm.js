import React, { Component } from "react";
import { Text } from "react-native";
import { Container, Content, Form, Item, Input, Button } from "native-base";

export default class LoginForm extends Component {
  render() {
    return (
      <Content>
        <Form style={{ margin: 10, marginRight: 15 }}>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item>
            <Input placeholder="Password" />
          </Item>
        </Form>
        <Button block info style={{ margin: 10 }}>
          <Text> Sign In </Text>
        </Button>
        <Button block warning style={{ margin: 10 }}>
          <Text> Sign Up </Text>
        </Button>
      </Content>
    );
  }
}
