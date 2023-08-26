import axios from "axios";
import { useCallback } from "react";
import { ApiRobots, Robot } from "../types";

const useRobotsApi = () => {
  const apiUrl = import.meta.env.VITE_API_ROBOTS_URL;

  const getRobots = useCallback(async (): Promise<Robot[]> => {
    try {
      const { data: apiRobots } = await axios.get<ApiRobots[]>(
        `${apiUrl}robots`,
      );

      const robots = apiRobots.map<Robot>(
        ({ _id, name, image, resistance, speed }) => ({
          id: _id,
          name,
          image,
          resistance,
          speed,
        }),
      );

      return robots;
    } catch (error) {
      throw new Error("Can't get any user");
    }
  }, [apiUrl]);

  return { getRobots };
};

export default useRobotsApi;
