import battleRobotsLogo from "../../assets/battleRobotsLogo.png";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="header-container">
        <img
          className="header-logo"
          src={battleRobotsLogo}
          alt="Battle Robots app logo"
        />
        <h1 className="header-title">Battle Robots</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
