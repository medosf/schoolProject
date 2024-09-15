import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import SignIn from "./components/signin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./app.css";

function App() {
  const [data, setData] = useState([]);
  console.log("data >>>", data);
  const triggerGet = async () => {
    try {
      const response = await fetch("http://localhost:3000/api");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    triggerGet();
  }, []);
  return (
    <Router>
      <div>
        <nav className="navigation">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/sign-in">SignIn</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
