import { useSearchParams } from "react-router-dom";
import "./signIn.css";
const SignIn = () => {
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url");

  const handleSubmit = () => {
    return (window.location.href = "/");
  };

  return (
    <div className="sign-in-wrapper">
      {url && <p>{`Please login to be able to visit: ${url} page`}</p>}
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" />
      </div>

      <button onClick={handleSubmit}>Sign in</button>
    </div>
  );
};

export default SignIn;
