import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { robotsMock } from "../../mocks/mocksData";
import { setupStore, store } from "../../store";
import RobotsList from "./RobotsList";

describe("Given a RobotsList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'List Of WarMachines' inside a heading", () => {
      const expectedHeadingText = "List Of WarMachines";

      render(
        <Provider store={store}>
          <RobotsList />
        </Provider>,
      );

      const textHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(textHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered with 'world destroyer' and 'robot smasher' robots", () => {
    test("Then it should show the robots names 'world destroyer' and 'robot smasher'", async () => {
      const store = setupStore({ robotsState: { robots: robotsMock } });

      render(
        <Provider store={store}>
          <RobotsList />
        </Provider>,
      );

      robotsMock.forEach((robot) => {
        const expectHeading = screen.getByRole("heading", {
          name: robot.name,
        });

        expect(expectHeading).toBeInTheDocument();
      });
    });
  });
});
