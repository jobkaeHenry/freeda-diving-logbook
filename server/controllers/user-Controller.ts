import { Request, Response, NextFunction } from "express";
import HttpError from "../models/error";
import { User } from "../models/user";
import bcrypt from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";
import { createAccToken, createRefreshToken } from "../utils/tokenGenerator";

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
    refreshToken: "",
  });

  const accessToken = createAccToken(createdUser.id);
  const refreshToken = createRefreshToken(createdUser.id);

  createdUser.refreshToken = refreshToken;

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("유저 생성에 실패했습니다", 500);
    next(error);
  }

  res.status(201).json({
    userId: createdUser.id,
    nickName: createdUser.nickName,
    image: createdUser.image,
    accessToken,
    refreshToken,
  });
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
    const error = new HttpError("존재하지 않는 유저입니다", 403);
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
    const error = new HttpError("비밀번호가 일치하지않습니다", 403);
    return next(error);
  }

  const accessToken = createAccToken(existingUser.id);
  const refreshToken = createRefreshToken(existingUser.id);
  
  res.status(200).json({
    userId: existingUser.id,
    nickName: existingUser.nickName,
    image: existingUser.image,
    accessToken,
    refreshToken,
  });
};

export const tokenRefresh = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { refreshToken } = req.body;
  //@ts-expect-error
  jwt.verify(refreshToken, JWT_SECRET_KEY as Secret, (err, decoded) => {
    if (err) {
      return next(new HttpError("유효하지 않은 토큰입니다", 401));
    }
    const { userId } = decoded;
    const accessToken = createAccToken(userId);
    res.status(200).json({ accessToken });
  });
};
