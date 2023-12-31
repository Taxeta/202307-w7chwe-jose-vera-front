import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the links 'Home' and 'Create Robot'", () => {
      const homeLink = "Home";
      const createLink = "Create Robot";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const navLinkHome = screen.getByRole("link", { name: homeLink });
      const navLinkCreate = screen.getByRole("link", { name: createLink });

      expect(navLinkHome).toBeInTheDocument();
      expect(navLinkCreate).toBeInTheDocument();
    });
  });
});
