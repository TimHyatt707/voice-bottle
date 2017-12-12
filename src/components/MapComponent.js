import React, { Component } from "react";
import { View, Spinner, Content, Icon } from "native-base";
import { StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this._handleMarkers = this._handleMarkers.bind(this);
  }

  _handleMarkers(e) {
    this.props.getNearbyMarkers({
      coordinates: `${this.props.latitude},${this.props.longitude}`
    });
  }

  render() {
    if (this.props.latitude === null && this.props.longitude === null) {
      this.props.getLocation();
      return (
        <Content
          style={{
            marginTop: "50%"
          }}
        >
          <Spinner color="blue" />
          <Text style={{ marginLeft: "36%", color: "black" }}>
            {" "}
            Loading Map...{" "}
          </Text>
        </Content>
      );
    } else {
      return (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            latitudeDelta: 0.096,
            longitudeDelta: 0.092
          }}
          zoomEnabled={false}
          minZoomLevel={16}
          maxZoomLevel={20}
          onMapReady={this._handleMarkers}
        >
          <MapView.Marker
            title="You"
            coordinate={{
              latitude: this.props.latitude,
              longitude: this.props.longitude
            }}
            image={require("../assets/boat2.png")}
          />
          {this.props.markers.map((marker, index) => {
            let coords = marker.coordinates.split(",");
            let lat = ~~coords[0];
            let long = ~~coords[1];
            return (
              <MapView.Marker
                key={marker.id}
                title={marker.title}
                coordinate={{ latitude: lat, longitude: long }}
              />
            );
          })}
        </MapView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
