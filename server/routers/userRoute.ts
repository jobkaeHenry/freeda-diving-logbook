import express from "express";
import { login, signUp } from "../controllers/user-Controller";

const router = express.Router();

// router.get("/:id", userController);
router.post("/signup",signUp)
router.post("/login",login)

export default router;
