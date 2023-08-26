import { useAppSelector } from "../../store";

const RobotsList = (): React.ReactElement => {
  const robots = useAppSelector((state) => state.robotsState.robots);

  return (
    <>
      <div>
        <h2>List Of WarMachines</h2>
      </div>
      <ul>
        {robots.map((robot) => (
          <li key={robot.id}></li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
