import express from "express";
import HttpError from "../models/error";
import userController from "../controllers/userController";

const router = express.Router();

router.get("/:id", userController);

export default router;
