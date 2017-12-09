import React, { Component } from "react";
import { View } from "native-base";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default class Map extends Component {
  render() {
    return (
      <MapView
        initialRegion={{
          latitude: 37.7749295,
          longitude: -122.419415,
          latitudeDelta: 0.096,
          longitudeDelta: 0.092
        }}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
    );
  }
}
