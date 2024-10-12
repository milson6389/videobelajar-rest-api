import { ResponseError } from "../error/responseError.js";
import DataKelas from "../data/kelas.json" assert { type: "json" };

const paidCourse = [];

const addKelasToPaidCourse = (courseId) => {
  const selectedClass = DataKelas.find((kelas) => kelas.id == courseId);
  if (!selectedClass) {
    throw new ResponseError(404, "Course Not Found");
  }
  paidCourse.push(selectedClass);
  return selectedClass;
};

const getAllKelas = async () => {
  return DataKelas;
};

const getAllPaidKelas = async () => {
  return paidCourse;
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
