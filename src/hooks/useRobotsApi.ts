import axios from "axios";
import { useCallback } from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import auth from "../firebase/firebase";
import {
  startLoadingActionCreator,
  stopLoadingActionCreator,
} from "../store/Ui/UiSlice";
import { ApiRobots, Robot } from "../types";

const apiUrl = import.meta.env.VITE_API_ROBOTS_URL;

const useRobotsApi = () => {
  const dispatch = useDispatch();
  const [user] = useIdToken(auth);

  const getRobots = useCallback(async (): Promise<Robot[]> => {
    dispatch(startLoadingActionCreator());
    const token = await user?.getIdToken();

    try {
      const { data: apiRobots } = await axios.get<{ robots: ApiRobots[] }>(
        `${apiUrl}robots`,
        { headers: { Authorization: `Bearer ${token}` } },
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
  }, [dispatch, user]);

  return { getRobots };
};

export default useRobotsApi;
