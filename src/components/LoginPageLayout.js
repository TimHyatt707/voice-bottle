import React from "react";
import { Container } from "native-base";

export default class LoginPageLayout extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        {this.props.children[0]}
        {this.props.children[1]}
        {this.props.children[2]}
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  }
};
