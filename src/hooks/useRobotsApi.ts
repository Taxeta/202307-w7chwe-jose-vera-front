import axios from "axios";
import { useCallback } from "react";
import { ApiRobots, Robot } from "../types";

const apiUrl = import.meta.env.VITE_API_ROBOTS_URL;

const useRobotsApi = () => {
  const getRobots = useCallback(async (): Promise<Robot[]> => {
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

      return robots;
    } catch {
      throw new Error("Can't get any robot");
    }
  }, []);

  return { getRobots };
};

export default useRobotsApi;
