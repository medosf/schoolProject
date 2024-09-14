import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const MapComponent = ({lat, lng}) => {
  return (
    <APIProvider apiKey={'AIzaSyApFJqUFA9umXiHTH0kYSTEdKixbMI50jM'}>
      <Map
        style={{ width: "600px", height: "400px", margin: "0 auto" }}
        defaultCenter={{ lat: lat, lng: lng}}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
};

export default MapComponent;
