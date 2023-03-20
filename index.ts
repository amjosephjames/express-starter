import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Response, Request } from "express";
import studentRouter from "./router/studentRouter";

const port: number = 3000;
const URL: string = "mongodb://localhost/typescriptclassdb";

mongoose
  .connect(URL)
  .then((): void => {
    console.log("Database connected");
  })
  .catch((error): void => {
    console.log(error.message);
  });
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  return res
    .status(201)
    .json({ message: "welcome to my first typescript api" });
});
app.use("/api", studentRouter);
app.listen(port, () => {
  console.log("Server is now running");
});
