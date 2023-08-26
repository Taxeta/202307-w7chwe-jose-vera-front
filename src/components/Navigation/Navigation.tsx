import { NavLink } from "react-router-dom";

const Navigation = (): React.ReactElement => {
  return (
    <nav>
      <ul>
        <li className="navigation-list">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/createRobotPage">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
