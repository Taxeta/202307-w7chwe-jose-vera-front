export interface ApiRobots {
  _id: string;
  name: string;
  image: string;
  resistance: number;
  speed: number;
}

export interface Robot extends Omit<ApiRobots, "_id"> {
  id: string;
}
