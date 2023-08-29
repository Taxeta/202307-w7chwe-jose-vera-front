import { render, screen } from "@testing-library/react";
import { User } from "firebase/auth";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";
import { Provider } from "react-redux";
import { store } from "../../store";
import NewRobotForm from "./NewRobotForm";

const user: Partial<User> = { displayName: "Jose" };

const authStateHookMock: Partial<AuthStateHook> = [user as User];

auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

describe("Given a NewRobotForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Name', 'Image', 'Resistance (1-10)', 'Speed (1-10)' fields", () => {
      const nameInputLabelText = "Name:";
      const ageInputLabelText = "Image:";
      const sexInputLabelText = "Resistance (1-10):";
      const imageInputLabelText = "Speed (1-10):";

      render(
        <Provider store={store}>
          <NewRobotForm />
        </Provider>,
      );

      const nameInput = screen.getByLabelText(
        nameInputLabelText,
      ) as HTMLInputElement;
      const imageInput = screen.getByLabelText(
        ageInputLabelText,
      ) as HTMLInputElement;
      const resistanceInput = screen.getByLabelText(
        sexInputLabelText,
      ) as HTMLInputElement;
      const speedInput = screen.getByLabelText(
        imageInputLabelText,
      ) as HTMLInputElement;

      expect(nameInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
      expect(resistanceInput).toBeInTheDocument();
      expect(speedInput).toBeInTheDocument();
    });
  });
});
