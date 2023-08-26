import { Robot, RobotsApi } from "../types";

export const robotsMock: Robot[] = [
  {
    id: "64e895e81736fb6abb590f0f",
    name: "words destructor",
    image: "https://i.ytimg.com/vi/PFPIaU3ESOw/maxresdefault.jpg",
    speed: 9,
    resistance: 5,
  },
  {
    id: "64e896ca1736fb6abb590f14",
    name: "robot smasher",
    image:
      "https://amcnetworks.es/wp-content/uploads/2018/09/Battlebots_Blaze.jpg",
    speed: 6,
    resistance: 9,
  },
];

export const apiRobotsMock: RobotsApi = {
  robots: [
    {
      _id: "64e895e81736fb6abb590f0f",
      name: "words destructor",
      image: "https://i.ytimg.com/vi/PFPIaU3ESOw/maxresdefault.jpg",
      speed: 9,
      resistance: 5,
    },
    {
      _id: "64e896ca1736fb6abb590f14",
      name: "robot smasher",
      image:
        "https://amcnetworks.es/wp-content/uploads/2018/09/Battlebots_Blaze.jpg",
      speed: 6,
      resistance: 9,
    },
  ],
};
