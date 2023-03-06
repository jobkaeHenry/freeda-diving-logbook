import { Request, Response, NextFunction, response } from "express";
import HttpError from "../models/error";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import dotenv from "dotenv";
import { RequestWithUserData, TokenPayload } from "../types/user";

dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authChecker = (
  req: RequestWithUserData,
  res: Response,
  next: NextFunction
) => {
  let token;
  try {
    token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new Error();
    }
    const decodedToken = jwt.verify(
      token,
      JWT_SECRET_KEY as Secret
    ) as TokenPayload;
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    next(new HttpError("토큰이 첨부되지 않았습니다", 400));
  }
};

export default authChecker;
