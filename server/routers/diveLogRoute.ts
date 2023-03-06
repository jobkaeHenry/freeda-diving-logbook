import express, { RequestHandler } from "express";
import {
  createDiveLog,
  deleteDivelogById,
  getDiveLogById,
  getDiveLogsByUserId,
} from "../controllers/diveLog-controller";
import authChecker from "../middleware/authChecker";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 추가 수정 삭제 조회
 */
router.get("/:id", getDiveLogById);
router.get("/", getDiveLogsByUserId);

router.use(authChecker as RequestHandler);
router.post("/", createDiveLog);
router.delete("/:id", deleteDivelogById);
export default router;
