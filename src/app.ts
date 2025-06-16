import express from "express";
import { route } from "./http/routes/route";
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

const baseUrl = '/api/v1/';

app.use(baseUrl + "health", (_, res) => {
  res.status(200).json({
    msg: "Health check successful",
  });
});

app.use(baseUrl, route);

export default app;
