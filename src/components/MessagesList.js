import React, { Component } from "react";
import { Button, Spinner, Content, List, ListItem, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import getLocation from "../redux/thunks/getLocationProcess";

export default class MessagesList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPins(this.props.id, this.props.token);
  }

  render() {
    let pins = this.props.markers;
    if (pins === null) {
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
      for (let i = 0; i < pins.length; i++) {
        if (pins[i].user_id === this.props.id) {
          messages.push(pins[i]);
        }
      }
      return (
        <Content>
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
                  style={{ marginLeft: "3%" }}
                >{`${message.name}: ${message.message}`}</Text>
                <Button
                  danger
                  onPress={() => {
                    this.props.onDeletePin(message.id, this.props.token);
                  }}
                >
                  <Text> X </Text>
                </Button>
              </ListItem>
            )}
          />
        </Content>
      );
    }
  }
}
