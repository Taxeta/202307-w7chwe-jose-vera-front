import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  startLoadingActionCreator,
  stopLoadingActionCreator,
} from "../store/Ui/UiSlice";
import { ApiRobots, Robot } from "../types";

const apiUrl = import.meta.env.VITE_API_ROBOTS_URL;

const useRobotsApi = () => {
  const dispatch = useDispatch();

  const getRobots = useCallback(async (): Promise<Robot[]> => {
    dispatch(startLoadingActionCreator());

    try {
      const { data: apiRobots } = await axios.get<{ robots: ApiRobots[] }>(
        `${apiUrl}robots`,
      );

      const robots = apiRobots.robots.map<Robot>(
        ({ _id, name, image, resistance, speed }) => ({
          id: _id,
          name,
          image,
          resistance,
          speed,
        }),
      );
      dispatch(stopLoadingActionCreator());

      return robots;
    } catch {
      dispatch(stopLoadingActionCreator());
      throw new Error("Can't get any robot");
    }
  }, [dispatch]);

  return { getRobots };
};

export default useRobotsApi;
