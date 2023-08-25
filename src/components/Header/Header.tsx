import battleRobotsLogo from "../../assets/battleRobotsLogo.png";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div>
        <img
          className="header-logo"
          src={battleRobotsLogo}
          alt="Battle Robots app logo"
        />
        <h1 className="header-title">Battle Robots</h1>
      </div>
    </header>
  );
};

export default Header;
