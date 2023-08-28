import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Battle Robots app logo'", () => {
      const imageAltText = "Battle Robots app logo";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const imageElement = screen.getByAltText(imageAltText);

      expect(imageElement).toBeInTheDocument();
    });

    test("Then it should show a 'Battle Robots' title inside a heading", () => {
      const titleExpected = "Battle Robots";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const headingTitle = screen.getByRole("heading", {
        name: titleExpected,
      });

      expect(headingTitle).toBeInTheDocument();
    });

    test("Then it should show a 'Sign Out' text button inside a heading", () => {
      const textOnButton = "Sign Out";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const buttonText = screen.getByText(textOnButton);

      expect(buttonText).toBeInTheDocument();
    });
  });
});
