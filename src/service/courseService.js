import { ResponseError } from "../error/responseError.js";
import DataKelas from "../data/kelas.json" assert { type: "json" };

const paidCourse = [];

const addKelasToPaidCourse = (courseId, userInfo) => {
  const selectedClass = DataKelas.find((kelas) => kelas.id == courseId);
  if (!selectedClass) {
    throw new ResponseError(404, "Course Not Found");
  }
  const newCourse = {
    user: userInfo,
    ...selectedClass,
  };

  paidCourse.push(newCourse);
  return newCourse;
};

const getAllKelas = async () => {
  return DataKelas;
};

const getAllPaidKelas = async (userId) => {
  const userPaidCourse = paidCourse.filter((course) => course.user == userId);
  return userPaidCourse;
};

const getKelasById = (courseId) => {
  const selectedClass = DataKelas.find((kelas) => kelas.id == courseId);
  if (!selectedClass) {
    throw new ResponseError(404, "Course Not Found");
  }
  return selectedClass;
};

export default {
  addKelasToPaidCourse,
  getAllKelas,
  getAllPaidKelas,
  getKelasById,
};
