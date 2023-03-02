import express from "express";
import {
  createDiveLog,
  getDiveLogById,
} from "../controllers/diveLog-controller";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 추가 수정 삭제 조회
 */
router.get("/:id", getDiveLogById);
router.post("/", createDiveLog);
export default router;
