import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Robot } from "../../types";
import { RobotState } from "../types";

const initialRobotState: RobotState = {
  robots: [],
};

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotState,
  reducers: {
    loadRobots: (
      currentRobotsState,
      action: PayloadAction<Robot[]>,
    ): RobotState => ({
      ...currentRobotsState,
      robots: action.payload,
    }),
  },
});

export const robotsReducer = robotsSlice.reducer;
export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;
