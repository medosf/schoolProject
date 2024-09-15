import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import SignIn from "./components/signin";
import NavButtons from "./components/nav/NavButtons";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./common/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

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
    <AuthProvider>
      <Router>
        <div>
          <nav className="navigation">
            <div className="nav-links">
              <Link to="/">Home</Link>

              <Link to="/about">About</Link>

              <Link to="/sign-in">SignIn</Link>
            </div>
            <div className="nav-buttons">
              <NavButtons />
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />

            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
