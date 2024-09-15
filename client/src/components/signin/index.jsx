import { useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SignIn = () => {
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  console.log("user", user);
  const url = searchParams.get("url");

  return (
    <div>
      {url && <p>{`Please login to be able to visit: ${url} page`}</p>}
      <p>Sign In</p>
    </div>
  );
};

export default SignIn;
