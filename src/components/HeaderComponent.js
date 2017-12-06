import React, { Component } from "react";
import { Text } from "react-native";
import { Container, Header, Body, Left, Title } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

export default class HeaderComponent extends Component {
  render() {
    return (
      <Header>
        <Body>
          <Title>
            {this.props.title} <Icon name="flask" />
          </Title>
        </Body>
      </Header>
    );
  }
}
