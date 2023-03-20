import express from "express";
import {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} from "../controller/studentController";

const router = express.Router();

router.route("/create").post(createStudent);
router.route("/getall").get(getStudents);
router.route("/:id").get(getStudent).patch(updateStudent).delete(deleteStudent);

export default router;
