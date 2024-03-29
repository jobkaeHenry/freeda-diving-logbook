import express, { NextFunction } from "express";
import type { ErrorRequestHandler } from "express";
import bodyParser from "body-parser";
import userRouter from "./routers/userRoute";
import helmet from "helmet";
import mongoose from "mongoose";
import authChecker from "./middleware/authChecker";
import dotenv from "dotenv";
import diveLogRoute from "./routers/diveLogRoute";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import options from "./swaggerOption";
import ExpressMongoSanitize from "express-mongo-sanitize";
import apiLimiter from "./middleware/apiLimiter";
import HttpError from "./models/error";

// 환경변수사용
dotenv.config();
const mongoDB_PW = process.env.MONGO_DB_PW;

// express
const app = express();
// 요청횟수 리미터
app.use(apiLimiter);
// 헬맷 설정 필요
app.use(helmet());
// 바디파서
app.use(bodyParser.json());
// 리퀘스트 세니타이징
app.use(ExpressMongoSanitize());

app.use(
  cors({
    origin: "http://localhost:3000",
    // origin: "*",
    credentials: true,
    methods: ["GET", "POST"],
  })
);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(options, { explorer: true })
);

// 오픈된 라우팅
app.use("/divelog", diveLogRoute);

app.use("/user", userRouter);

// 에러핸들러
app.use(((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.code || 500).json({ message: err.message });
}) as ErrorRequestHandler);

mongoose
  .connect(
    `mongodb+srv://freeda:${mongoDB_PW}@cluster0.0l2cgad.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    // 서버를 시작한다는 뜻
    app.listen(5000);
  })
  .catch((err) => {
    console.log(`!!!몽구스 에러 ${err}`);
  });
