import express from "express";
import courseController from "../controller/courseController.js";

const courseRouter = new express.Router();
courseRouter.route("/api/v1/kelas").get(courseController.getAllCourseList);
courseRouter.route("/api/v1/kelas/:id").get(courseController.getKelasById);

courseRouter
  .route("/api/v1/course")
  .get(courseController.getAllPaidCourseList)
  .post(courseController.addCourseToPaidCourse);

export { courseRouter };
