import { robotsMock } from "../../mocks/mocksData";
import { RobotState } from "../types";
import { loadRobotsActionCreator, robotsReducer } from "./RobotsSlice";

describe("Given a robots reducer", () => {
  describe("When it receives a load robots action with two robots", () => {
    test("Then it should return a new state with the received two robots", () => {
      const currentRobotState: RobotState = {
        robots: [],
      };
      const robots = robotsMock;

      const loadRobotsAction = loadRobotsActionCreator;

      const newRobotState = robotsReducer(currentRobotState, loadRobotsAction);

      expect(newRobotState).toHaveProperty("robots", robots);
    });
  });
});
