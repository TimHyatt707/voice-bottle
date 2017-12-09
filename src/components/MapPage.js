import React from "react";
import MapPageLayout from "./MapPageLayout";
import Header from "./HeaderComponent";
import Map from "./MapComponent";

export default function MapPage({}) {
  return (
    <MapPageLayout>
      <Header title={"Map"} />
      <Map />
    </MapPageLayout>
  );
}
