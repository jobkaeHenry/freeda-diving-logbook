import express, { RequestHandler } from "express";
import { login, signUp } from "../controllers/user-Controller";
import authChecker from "../middleware/authChecker";

const router = express.Router();

// router.get("/:id", userController);
router.post("/signup", signUp);

// 보호된 라우팅 - authCheck
router.use(authChecker as RequestHandler);
router.post("/login", login);

export default router;
