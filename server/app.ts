import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routers/userRoute";
import HttpError from "./models/error";

const app = express();
app.use(bodyParser.json());
app.get("/", (req, res, next) => {
  console.log("접속함");
  res.json({ message: "안녕" });
});
app.use("/user", userRouter);

app.listen(5000);
