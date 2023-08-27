import { renderHook } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { errorHandlers } from "../mocks/handlers";
import { robotsMock } from "../mocks/mocksData";
import { server } from "../mocks/server";
import { setupStore } from "../store";
import useRobotsApi from "./useRobotsApi";

describe("Given a function getRobots from useRobotsApi hook", () => {
  const uiWrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    const store = setupStore({ robotsState: { robots: robotsMock } });

    return <Provider store={store}>{children}</Provider>;
  };

  describe("When the function is called", () => {
    test("Then it should receive a list of robots", async () => {
      const { result } = renderHook(() => useRobotsApi(), {
        wrapper: uiWrapper,
      });

      const { getRobots } = result.current;

      const robots = await getRobots();

      expect(robots).toStrictEqual(robotsMock);
    });
  });

  describe("When a function getRobots send a request to robots data", () => {
    test("Then it should show a 'Can't get any robot' message", () => {
      const expectedError = new Error("Can't get any robot");
      server.resetHandlers(...errorHandlers);

      const { result } = renderHook(() => useRobotsApi(), {
        wrapper: uiWrapper,
      });

      const { getRobots } = result.current;

      const robots = getRobots();

      expect(robots).rejects.toThrowError(expectedError);
    });
  });
});
