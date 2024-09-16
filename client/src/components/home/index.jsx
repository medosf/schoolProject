import MapComponent from "./Map";
import Card from "../common/card";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="hero-image">
        <img src="https://via.placeholder.com/1200" alt="placeholder" />
        <div className="hero-text">
          <h3>Our Services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            voluptas, voluptatum, doloribus, quae quia nemo quas quidem
            repudiandae atque doloremque autem.
          </p>
        </div>
      </div>
      <div className="cards-wrapper">
        <Card />
        <Card />
        <Card />
      </div>
      <MapComponent />
    </div>
  );
};

export default Home;
