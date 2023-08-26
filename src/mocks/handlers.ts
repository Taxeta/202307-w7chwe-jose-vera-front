import { rest } from "msw";
import { robotsMock } from "./mocksData";

export const handlers = [
  rest.get(`${import.meta.env.VITE_API_ROBOTS_URL}robots`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(robotsMock));
  }),
];

export const errorHandlers = [
  rest.get(`${import.meta.env.VITE_API_ROBOTS_URL}robots`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get any user"));
  }),
];
