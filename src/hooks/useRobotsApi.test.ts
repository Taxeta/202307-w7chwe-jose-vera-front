import { renderHook } from "@testing-library/react";
import { robotsMock } from "../mocks/mocksData";
import useRobotsApi from "./useRobotsApi";

describe("Given a function getRobots from useRobotsApi hook", () => {
  describe("When the function is called", () => {
    test("Then it should receive a list of users", async () => {
      const { result } = renderHook(() => useRobotsApi());

      const { getRobots } = result.current;

      const robots = await getRobots();

      expect(robots).toStrictEqual(robotsMock);
    });
  });
});
