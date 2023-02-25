import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routers/userRoute";
import helmet from "helmet";
import mongoose from "mongoose";
import authChecker from "./controllers/check-auth";
import dotenv from "dotenv";
import diveLogRoute from "./routers/diveLogRoute";
import cors from 'cors'

// 환경변수사용
dotenv.config();
const mongoDB_PW = process.env.MONGO_DB_PW;
// express
const app = express();
// 헬맷 설정 필요
app.use(helmet());
app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST"],
}));

// 오픈된 라우팅
app.use("/divelog", diveLogRoute);

// 보호된 라우팅 - authCheck
// app.use(authChecker);
app.use("/user", userRouter);

mongoose
  .connect(
    `mongodb+srv://freeda:${mongoDB_PW}@cluster0.0l2cgad.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    // 서버를 시작한다는 뜻
    app.listen(5000);
  })
  .catch((err) => {
    console.log(`몽구스 에러 ${err}`);
  });
