import { Request, Response, NextFunction } from "express";
import { dummy } from "../models/dummy";
import HttpError from "../models/error";
import { User } from "../models/user";

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

  const createdUser = new User({
    email,
    password,
    nickName,
    image,
    divelogs:[],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("유저 생성에 실패했습니다", 500);
    next(error);
  }
  res.status(201).json({ message: "유저가 생성됬습니다" });
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 엠티체크 해야함
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({email:email});
  } catch (err) {
    return next(new HttpError("유저찾기 실패", 500));
  }

  if(!existingUser || existingUser.password!==password){
    return next(new HttpError("비밀번호가 일치하지 않습니다", 401))
  }
  res.json({message:"로그인 성공~"})
};
