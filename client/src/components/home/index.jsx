import { useState, useEffect } from "react";
import MapComponent from "./Map";
const Home = () => {
  // const [location, setLocation] = useState({
  //     lat: 0,
  //     lng: 0
  // })
  // useEffect(()=>{
  //     navigator.geolocation.getCurrentPosition((position) => {setLocation({
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  // })})
  // console.log("location", location)

  // },[])
  return (
    <div>
      <p>Home</p>
      {/* <MapComponent lat={location.lat} lng={location.lng}/> */}
    </div>
  );
};

export default Home;
