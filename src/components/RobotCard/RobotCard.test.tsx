import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { robotsMock } from "../../mocks/mocksData";
import { store } from "../../store";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with the alternative text 'world destroyer destroying a robot'", () => {
      const alternativeImageText = "world destroyer destroying a robot";

      render(
        <Provider store={store}>
          <RobotCard robot={robotsMock[0]} />
        </Provider>,
      );

      const image = screen.getByAltText(alternativeImageText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show a heading text 'world destroyer'", () => {
      const headingText = "world destroyer";

      render(
        <Provider store={store}>
          <RobotCard robot={robotsMock[0]} />
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
