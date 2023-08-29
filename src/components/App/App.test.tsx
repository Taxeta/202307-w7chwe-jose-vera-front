import { render, screen } from "@testing-library/react";
import { User } from "firebase/auth";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store";
import App from "./App";

const user: Partial<User> = { displayName: "Jose" };

const authStateHookMock: Partial<AuthStateHook> = [user as User];

auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'List Of WarMachines", () => {
      const expectedText = "List Of WarMachines";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
