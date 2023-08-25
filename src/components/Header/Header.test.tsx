import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Battle Robots app logo'", () => {
      const imageAltText = "Battle Robots app logo";

      render(<Header />);

      const imageElement = screen.getByAltText(imageAltText);

      expect(imageElement).toBeInTheDocument();
    });
  });

  test("Then it should show a 'Battle Robots' title inside a heading", () => {
    const titleExpected = "Battle Robots";

    render(<Header />);

    const headingTitle = screen.getByRole("heading", {
      name: titleExpected,
    });

    expect(headingTitle).toBeInTheDocument();
  });
});
