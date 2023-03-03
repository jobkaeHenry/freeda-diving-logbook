import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { DiveLog } from "../models/divelog";
import HttpError from "../models/error";
import { User } from "../models/user";

export const createDiveLog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { diveType, location, weatherInfo, diveInfo, personal, author } =
    req.body;
  //express-validator 추가하기
  // if (diveType === "scuba") {
  const createdDiveLog = new DiveLog({
    author,
    diveType,
    location,
    weatherInfo,
    diveInfo,
    personal,
  });
  // 유저가 실존하는지 검증
  let ActualUser;
  try {
    ActualUser = await User.findById(author);
  } catch (err) {
    return next(
      new HttpError("유저를 검증하는 과정에서 오류가 발생했습니다", 500)
    );
  }

  // 실존하지 않을경우
  if (!ActualUser) {
    return next(new HttpError("존재하지 않는 유저입니다", 403));
  }
  // 실존할 경우
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await createdDiveLog.save({ session });
    // @ts-expect-error
    ActualUser.divelogs.push(createdDiveLog);
    await ActualUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    const error = new HttpError("저장에 실패했습니다", 500);
    return next(error);
  }
  res.status(201).json({ id: createdDiveLog.toObject({ getters: true })._id });
  // }
};

/** 다이브로그 uid가 일치하는 다이브로그 1개 를 찾아 리턴하는 컨트롤러 */
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
    const error = new HttpError("존재하지 않는 로그입니다", 404);
    return next(error);
  }
  res.json(diveLog.toObject({ getters: true }));
};

/** id(유저id)를 body로 받아가 가지고 있는 다이브 정보를 리턴*/
export const getDiveLogsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.body.id;

  let findDivelogByUserId;
  try {
    findDivelogByUserId = await DiveLog.find({ author: userId }, "location");
    // 이런 방법도 가능
    // findDivelogByUserId = await User.findById(userId).populate("divelogs");
  } catch (err) {
    next(new HttpError("로그를 찾지 못했습니다", 500));
  }
  if (!findDivelogByUserId) {
    next(new HttpError("존재하지 않는 로그입니다", 404));
  } else
    return res.status(200).json(
      findDivelogByUserId.map((divelog) => divelog.toObject({ getters: true }))
      // 이런방법도가능
      // findDivelogByUserId.divelogs.map(divelog=>divelog.toObject({ getters: true }))
    );
};
export const deleteDivelogById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const DivelogId = req.params.id;
  // 얘 바꾸삼
  const userId = req.body.id;
  // 유저검증부터

  // 삭제할 애를 정함
  let targetDivelog;
  try {
    targetDivelog = await DiveLog.findById(DivelogId).populate("author");
  } catch (error) {
    return next(new HttpError("삭제 대상 게시물 조회에 실패했습니다", 500));
  }
  // 로그 존재여부 확인
  if (!targetDivelog) {
    return next(new HttpError("존재하지 않는 로그입니다", 404));
  }
  // 권한확인
  else if (targetDivelog.author !== userId) {
    // return next(new HttpError("삭제 권한이 없습니다", 401));
  } else
    try {
      const session = await mongoose.startSession();
      session.startTransaction();
      await targetDivelog.remove({ session });
      // @ts-expect-error
      targetDivelog.author.divelogs.pull(targetDivelog);
      // @ts-expect-error
      await targetDivelog.author.save({ session });
      session.commitTransaction();
    } catch (error) {
      return next(new HttpError("삭제에 실패했습니다", 500));
    }
  res.status(201).json({ message: "삭제가 완료되었습니다" });
};
