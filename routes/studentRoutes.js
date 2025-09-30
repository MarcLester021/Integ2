import express from "express";
import { getStudent, createStudent } from "../controllers/studentController.js";
import { validateStudent } from "../validators/studentValidator.js";

const router = express.Router();

router.get("/", getStudent);
router.post("/", validateStudent, createStudent);

export default router;