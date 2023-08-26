import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
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
});
