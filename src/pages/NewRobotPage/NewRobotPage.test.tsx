import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import NewRobotPage from "./NewRobotPage";

describe("Given a NewRobotPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Log to create your WarRobot!' as heading", () => {
      const expectedHeadingText = "Log to create your WarRobot!";

      render(
        <Provider store={store}>
          <NewRobotPage />
        </Provider>,
      );

      const textHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(textHeading).toBeInTheDocument();
    });
  });
});
