import { Request, Response, NextFunction } from "express";
import HttpError from "../models/error";
import { User } from "../models/user";
import bcrypt from "bcryptjs";

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, nickName, image } = req.body;

  // 유저가 존재 하는지 여부
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    const error = new HttpError(
      "이미 존재하는 유저인지 확인에 실패했습니다.",
      500
    );
    return next(error);
  }
  // 존재한다면 에러 반환
  if (existingUser) {
    return next(new HttpError("이미 존재하는 유저입니다", 422));
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("비밀번호 해싱에 실패했습니다", 500);
    next(error);
  }

  const createdUser = new User({
    email,
    password: hashedPassword,
    nickName,
    image,
    divelogs: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("유저 생성에 실패했습니다", 500);
    next(error);
  }
  res.status(201).json({ createdUser });
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 엠티체크 해야함
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("유저찾기 실패", 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError("존재하지 않는 유저입니다", 401);
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(
      password,
      existingUser.password as string
    );
  } catch (err) {
    const error = new HttpError("비밀번호 비교에 실패했습니다", 500);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError("비밀번호가 일치하지않습니다", 401);
    return next(error);
  }

  res.status(200).json(existingUser.toObject({ getters: true }));
};
