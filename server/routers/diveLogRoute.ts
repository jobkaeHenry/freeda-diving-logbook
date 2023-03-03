import express from "express";
import {
  createDiveLog,
  getDiveLogById,
  getDiveLogsByUserId,
} from "../controllers/diveLog-controller";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 추가 수정 삭제 조회
 */
router.get("/:id", getDiveLogById);
router.get("/", getDiveLogsByUserId);
router.post("/", createDiveLog);
export default router;
