import { useAppSelector } from "../../store";
import RobotCard from "../RobotCard/RobotCard";
import "./RobotsList.css";

const RobotsList = (): React.ReactElement => {
  const robots = useAppSelector((state) => state.robotsState.robots);

  return (
    <>
      <div className="list-container">
        <h2 className="robots-title">List Of WarMachines</h2>
      </div>
      <ul className="robots-list">
        {robots.map((robot) => (
          <li key={robot.id}>
            <RobotCard robot={robot} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
