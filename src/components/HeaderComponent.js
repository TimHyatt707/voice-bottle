import React, { Component } from "react";
import { Container, Header, Body, Left, Title } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

export default class HeaderComponent extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>
              {this.props.headerLabel} <Icon name="flask" />
            </Title>
          </Body>
        </Header>
      </Container>
    );
  }
}
