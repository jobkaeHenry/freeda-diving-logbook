import express from "express";
import {
  createDiveLog,
  deleteDivelogById,
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
router.delete("/:id",deleteDivelogById)
export default router;
