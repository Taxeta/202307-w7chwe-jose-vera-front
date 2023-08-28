import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import "./Navigation.css";

const Navigation = (): React.ReactElement => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <span>Loading...</span>;
  }

  if (!user) {
    return (
      <>
        <Navigate to="/home" />
      </>
    );
  }

  return (
    <nav className="main-container">
      <ul className="navigation-list">
        <li>
          <NavLink className="navigation-list" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation-list" to="/robot-creator">
            Create Robot
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
