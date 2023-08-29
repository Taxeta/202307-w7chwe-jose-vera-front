import { render, screen } from "@testing-library/react";
import { User } from "firebase/auth";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

const user: Partial<User> = { displayName: "Jose" };

const authStateHookMock: Partial<AuthStateHook> = [user as User];

auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

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

    test("Then it should show a 'Log In' text button inside a heading", () => {
      const initialText = "Hi, Jose!";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const buttonText = screen.getByText(initialText);

      expect(buttonText).toBeInTheDocument();
    });
  });
});
