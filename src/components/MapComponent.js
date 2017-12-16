import React, { Component } from "react";
import { View, Spinner, Content, Button, ActionSheet } from "native-base";
import { StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._handleMarkers = this._handleMarkers.bind(this);
  }

  _handleMarkers(e) {
    this.props.getNearbyMarkers &&
      this.props.getNearbyMarkers({
        coordinates: `${this.props.latitude},${this.props.longitude}`
      });
  }

  render() {
    console.log(this.props.latitude, this.props.longitude);
    let lat = 0;
    let long = 0;
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
      lat = this.props.latitude || 0;
      long = this.props.longitude || 0;
      return (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.096,
            longitudeDelta: 0.092
          }}
          scrollEnabled={false}
          zoomEnabled={false}
          moveOnMarkerPress={false}
          minZoomLevel={16}
          maxZoomLevel={20}
          onMapReady={this._handleMarkers}
        >
          <MapView.Marker
            title="You"
            coordinate={{
              latitude: lat,
              longitude: long
            }}
            image={require("../assets/boat2.png")}
          />
          {this.props.markers
            ? this.props.markers.map((marker, index) => {
                let coords = marker.coordinates.split(",");
                let lat = parseFloat(coords[0]);
                let long = parseFloat(coords[1]);
                let options;
                if (!marker.message) {
                  options = ["no message :(", "CLOSE"];
                } else options = [`says "${marker.message}"`, "CLOSE"];
                return (
                  <MapView.Marker
                    key={marker.id}
                    title={marker.name}
                    coordinate={{ latitude: lat, longitude: long }}
                    image={require("../assets/speaker1.png")}
                    onPress={() =>
                      ActionSheet.show(
                        {
                          options: options,
                          cancelButtonIndex: 1,
                          title: `${marker.name}`
                        },
                        buttonIndex => {
                          this.setState({ clicked: options[buttonIndex] });
                        }
                      )}
                  />
                );
              })
            : null}
        </MapView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    marginTop: 60,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
