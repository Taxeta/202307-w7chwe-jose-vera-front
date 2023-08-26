export interface ApiRobots {
  _id: string;
  name: string;
  image: string;
  resistance: number;
  speed: number;
}

export interface RobotsApi {
  robots: ApiRobots[];
}

export interface Robot extends Omit<RobotsApi, "_id" | "robots"> {
  id: string;
  name: string;
  image: string;
  resistance: number;
  speed: number;
}
