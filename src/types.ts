export interface ApiRobots {
  id: string;
  name: string;
  image: string;
  resistance: number;
  speed: number;
}

export interface Robot extends Omit<ApiRobots, "id"> {
  _id: string;
}
