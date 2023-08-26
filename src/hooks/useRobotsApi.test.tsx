import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../mocks/handlers";
import { robotsMock } from "../mocks/mocksData";
import { server } from "../mocks/server";
import useRobotsApi from "./useRobotsApi";

describe("Given a function getRobots from useRobotsApi hook", () => {
  describe("When the function is called", () => {
    test("Then it should receive a list of robots", async () => {
      const { result } = renderHook(() => useRobotsApi());

      const { getRobots } = result.current;

      const robots = await getRobots();

      expect(robots).toStrictEqual(robotsMock);
    });
  });

  describe("When a function getRobots send a request to robots data", () => {
    test("Then it should show a 'Can't get any robot' message", () => {
      const expectedError = new Error("Can't get any robot");
      server.resetHandlers(...errorHandlers);

      const { result } = renderHook(() => useRobotsApi());

      const { getRobots } = result.current;

      const robots = getRobots();

      expect(robots).rejects.toThrowError(expectedError);
    });
  });
});
