import express from "express";
import { login, signUp } from "../controllers/user-Controller";
import authChecker from "../middleware/authChecker";

const router = express.Router();

// router.get("/:id", userController);
router.post("/signup", signUp);

// 보호된 라우팅 - authCheck
router.post("/login", login);
router.use(authChecker);

export default router;
