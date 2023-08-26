import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'Hello world!", () => {
      const expectedText = /BattleRobots/i;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
