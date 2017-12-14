import React from "react";
import MapPageLayout from "./MapPageLayout";
import Header from "./HeaderComponent";
import Map from "./MapComponent";

export default function MapPage({
  getLocation,
  getNearbyMarkers,
  markers,
  latitude,
  longitude
}) {
  return (
    <MapPageLayout>
      <Header title={"Map"} recordingToggle={true} />
      <Map
        getLocation={getLocation}
        getNearbyMarkers={getNearbyMarkers}
        markers={markers}
        latitude={latitude}
        longitude={longitude}
      />
    </MapPageLayout>
  );
}
