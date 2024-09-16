import React, { useState, useEffect } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const MapComponent = () => {
  const [location, setLocation] = useState({
    lat: 40.7128,
    lng: -74.006,
  });

  return (
    <div className="map-container">
      <div>
        <h3>header</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
          laboriosam! At, nostrum suscipit! Quia ex mollitia ut voluptas tenetur
          debitis! Quas, veniam praesentium.
        </p>
        <h4>Working Hours</h4>
        <ul>
          <li>
            <span class="day">Monday:</span>{" "}
            <span class="hours">9:00 AM - 6:00 PM</span>
          </li>
          <li>
            <span class="day">Tuesday:</span>{" "}
            <span class="hours">9:00 AM - 6:00 PM</span>
          </li>
          <li>
            <span class="day">Wednesday:</span>{" "}
            <span class="hours">9:00 AM - 6:00 PM</span>
          </li>
          <li>
            <span class="day">Thursday:</span>{" "}
            <span class="hours">9:00 AM - 6:00 PM</span>
          </li>
          <li>
            <span class="day">Friday:</span>{" "}
            <span class="hours">9:00 AM - 6:00 PM</span>
          </li>
          <li>
            <span class="day">Saturday:</span> <span class="hours">Closed</span>
          </li>
          <li>
            <span class="day">Sunday:</span> <span class="hours">Closed</span>
          </li>
        </ul>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default MapComponent;
