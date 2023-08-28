import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import battleRobotsLogo from "../../assets/battleRobotsLogo.png";
import { auth, gitHubProvider } from "../../firebase/firebase";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = (): React.ReactElement => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <span>Loading...</span>;
  }

  const login = async () => {
    await signInWithPopup(auth, gitHubProvider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-titlelogo">
          <img
            className="header-logo"
            src={battleRobotsLogo}
            alt="Battle Robots app logo"
          />
          <h1 className="header-title">Battle Robots</h1>
        </div>
        <div className="header-login">
          {user ? (
            <>
              <span className="login-user">{`Hi, ${user?.displayName}!`}</span>
              <button className="logout" onClick={logout}>
                Sign Out
              </button>
            </>
          ) : (
            <button className="login" onClick={login}>
              Sign In
            </button>
          )}
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
