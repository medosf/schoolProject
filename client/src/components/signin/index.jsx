import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import "./signIn.css";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user log info", email, password);
    if (email === "test@email.com" && password === "test") {
      // using email handle as username for now
      login(email.split("@")[0]);
      navigate("/");
    } else {
      setError(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(false);
  };

  return (
    <div className="sign-in-wrapper">
      {error && <p className="sign-in-error">Invalid email or password</p>}
      {url && <p>{`Please login to be able to visit: ${url} page`}</p>}
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="dev mode: use test@email.com"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="dev mode: use test"
        />
      </div>

      <button onClick={handleSubmit}>Sign in</button>
    </div>
  );
};

export default SignIn;
