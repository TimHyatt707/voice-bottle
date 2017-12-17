import React, { Component } from "react";
import { Button, Spinner, Content, List, ListItem, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import getLocation from "../redux/thunks/getLocationProcess";

export default class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPersonalMessages: true,
      loading: false
    };
    this._handleToggle = this._handleToggle.bind(this);
  }

  componentDidMount() {
    this.props.getPins(this.props.id, this.props.token);
  }

  _handleToggle() {
    if (this.state.showPersonalMessages) {
      this.setState({ showPersonalMessages: false });
    } else {
      this.setState({ showPersonalMessages: true });
    }
  }

  render() {
    let pins = this.props.markers;
    if (!pins) this.setState({ loading: true });
    if (this.state.loading) {
      return (
        <Content
          style={{
            marginTop: "50%"
          }}
        >
          <Spinner color="blue" />
          <Text style={{ marginLeft: "30%", color: "black" }}>
            {" "}
            Loading Messages...{" "}
          </Text>
        </Content>
      );
    } else {
      let messages = [];
      if (this.state.showPersonalMessages) {
        for (let i = 0; i < pins.length; i++) {
          if (pins[i].user_id === this.props.id) {
            messages.push(pins[i]);
          }
        }
      } else messages = pins;
      return (
        <Content>
          <Button
            success
            onPress={this._handleToggle}
            style={{
              alignSelf: "center",
              marginTop: "10%",
              marginBottom: "5%"
            }}
          >
            <Text>
              {this.state.showPersonalMessages
                ? " Show All Messages "
                : " Show My Messages "}
            </Text>
          </Button>
          <List
            dataArray={messages}
            renderRow={message => (
              <ListItem
                button
                key={message.id}
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginRight: "5%",
                  marginTop: "3%"
                }}
              >
                <Text
                  style={{ marginLeft: "3%", width: "80%" }}
                >{`${message.name}: ${message.message}`}</Text>
                {this.state.showPersonalMessages ? (
                  <Button
                    danger
                    onPress={() => {
                      this.props.onDeletePin(message.id, this.props.token);
                    }}
                  >
                    <Text> X </Text>
                  </Button>
                ) : null}
              </ListItem>
            )}
          />
        </Content>
      );
    }
  }
}
