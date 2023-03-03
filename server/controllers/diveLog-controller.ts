import { Request, Response, NextFunction } from "express";
import { DiveLog } from "../models/divelog";
import HttpError from "../models/error";

export const createDiveLog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { diveType, location, weatherInfo, diveInfo, personal } = req.body;
  //express-validator 추가하기
  // if (diveType === "scuba") {
  const createdDiveLog = new DiveLog({
    author: "임시크리에이터",
    diveType,
    location,
    weatherInfo,
    diveInfo,
    personal,
  });

  try {
    await createdDiveLog.save();
  } catch (err) {
    const error = new HttpError("저장에 실패했습니다", 500);
    return next(error);
  }
  res.status(201).json({ id: createdDiveLog.toObject({ getters: true })._id });
  // }
};

export const getDiveLogById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const diveLogID = req.params.id;
  let diveLog;
  try {
    diveLog = await DiveLog.findById(diveLogID);
  } catch (err) {
    console.log(err);
    const error = new HttpError("오류가 발생했습니다", 500);
    return next(error);
  }
  if (!diveLog) {
    const error = new HttpError("그런 로그는 없습니다", 404);
    return next(error);
  }
  res.json(diveLog.toObject({ getters: true }));
};

export const getDiveLogsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.body.id;

  let findDivelogByUserId;
  try {
    findDivelogByUserId = await DiveLog.find({ author: userId }, "location");
  } catch (err) {
    next(new HttpError("찾지 못했습니다", 500));
  }
  if (!findDivelogByUserId) {
    next(new HttpError("찾지 못했습니다", 404));
  } else
    return res
      .status(200)
      .json(
        findDivelogByUserId.map((divelog) =>
          divelog.toObject({ getters: true })
        )
      );
};
