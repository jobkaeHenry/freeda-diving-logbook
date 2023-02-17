import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routers/userRoute";
import helmet from "helmet";

import HttpError from "./models/error";

const app = express();
// 헬맷 설정 필요
app.use(helmet());
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  console.log("접속함");
  res.json({ message: "안녕" });
  next();
});
app.use("/user", userRouter);

app.listen(5000);
