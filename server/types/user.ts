import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequestWithUserData extends Request {
  userData: UserData | undefined;
}
export type UserData = { userId: string };

export interface TokenPayload extends JwtPayload {
  userId: string;
  email: string;
}
