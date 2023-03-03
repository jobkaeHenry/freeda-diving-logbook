import express from "express";
import HttpError from "../models/error";
import { signin, signUp } from "../controllers/user-Controller";

const router = express.Router();

// router.get("/:id", userController);
router.post("/signup",signUp)
router.post("/signin",signin)

export default router;
