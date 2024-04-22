// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { sequelize } from "./server/sequelize"

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

// app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

sequelize.authenticate()
  .then((res) => {
    console.log('Database Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  })

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
