import { useAuth } from "../../context/AuthContext";
const NavButtons = () => {
  const { user, login, logout, isAuthenticated } = useAuth();
  return (
    <div>
      {isAuthenticated ? (
        <div className="flex-container">
          <p>hello, {user}</p>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <button onClick={() => login("John")}>Log In</button>
      )}
    </div>
  );
};

export default NavButtons;
