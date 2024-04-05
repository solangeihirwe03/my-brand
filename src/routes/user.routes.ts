import express from "express";
import { getUser, addUser, getUserById, updateUser, deleteUser } from "../controllers/user.controller";
import { UserDocument } from "../modules/user.model";

const router = express.Router();

router.get("/", getUser);

router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
