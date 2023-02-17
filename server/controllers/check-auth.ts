import { Request, Response, NextFunction } from "express";
import HttpError from "../models/error";

const authChecker = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    next();
  } else {
    return next(new HttpError("허가되지않은 접근입니다", 401));
  }
};

export default authChecker;
