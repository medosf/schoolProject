import React, { useState, useEffect } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const MapComponent = () => {
  const [location, setLocation] = useState({
    lat: 40.7128,
    lng: -74.006,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <APIProvider
      apiKey={
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY ||
        process.env.VITE_GOOGLE_MAPS_API_KEY
      }
    >
      <Map
        style={{ width: "600px", height: "400px", margin: "0 auto" }}
        // className="map-contiener"
        defaultCenter={{ lat: location.lat, lng: location.lng }}
        defaultZoom={14}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <Marker position={{ lat: location.lat, lng: location.lng }} />
      </Map>
    </APIProvider>
  );
};

export default MapComponent;
