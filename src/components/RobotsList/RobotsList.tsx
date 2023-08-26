import { useAppSelector } from "../../store";
import "./RobotsList.css";

const RobotsList = (): React.ReactElement => {
  const robots = useAppSelector((state) => state.robotsState.robots);

  return (
    <>
      <div>
        <h2 className="robots-title">List Of WarMachines</h2>
      </div>
      <ul className="robots-list">
        {robots.map((robot) => (
          <li key={robot.id}></li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
