import express from "express";
import {
  createDiveLog,
  getDiveLogById,
} from "../controllers/diveLog-controller";
import HttpError from "../models/error";

const router = express.Router();

router.get("/:id", getDiveLogById);
router.post("/", createDiveLog);
export default router;
