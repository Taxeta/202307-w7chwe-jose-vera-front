import { startLoadingActionCreator, uiReducer } from "./UiSlice";
import { UiState } from "./types";

describe("Given a UiSlice reducer", () => {
  describe("When it is called with a startLoading action and a currentState with a property isLoading set to false", () => {
    test("Then it should return a new state with the property isLoading to true", () => {
      const currenUiState: UiState = {
        isLoading: false,
      };

      const loadingAction = startLoadingActionCreator();

      const newUiState = uiReducer(currenUiState, loadingAction);

      expect(newUiState).toHaveProperty("isLoading", true);
    });
  });
});
