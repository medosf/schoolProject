import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const NavButtons = () => {
  const { user, logout, isAuthenticated } = useAuth();
  return (
    <div>
      {isAuthenticated ? (
        <div className="flex-container">
          <p>hello, {user}</p>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <Link className="link-button" to="/sign-in">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default NavButtons;
