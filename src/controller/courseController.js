import courseService from "../service/courseService.js";

const addCourseToPaidCourse = async (req, res, next) => {
  try {
    const courseId = req.body.courseId;
    const result = await courseService.addKelasToPaidCourse(courseId);
    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllCourseList = async (req, res, next) => {
  try {
    const result = await courseService.getAllKelas();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllPaidCourseList = async (req, res, next) => {
  try {
    const result = await courseService.getAllPaidKelas();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getKelasById = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const result = await courseService.getKelasById(courseId);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  addCourseToPaidCourse,
  getAllCourseList,
  getAllPaidCourseList,
  getKelasById,
};
