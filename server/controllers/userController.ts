import { Request, Response, NextFunction } from "express";
import { dummy } from "../models/dummy";
import HttpError from "../models/error";

const userController = (req: Request, res: Response, next: NextFunction) => {
  console.log("get request");

  const place = dummy.find((e) => {
    return String(e.id) === req.params.id;
  });
  if (place) {
    res.json(place);
  } else return next(new HttpError("그런유저 없음", 404));
};

export default userController;
