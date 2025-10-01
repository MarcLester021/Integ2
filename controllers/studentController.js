import studentService from "../services/studentService.js";
import Student from "../models/Student.js";

const getAllStudents = async () => {
  return await Student.find(); 
}

const addStudent = async (data) => {
  const newStudent = new Student(data);
  return await newStudent.save();
}

const getStudentById = async (id) => {
  return await Student.findOne({ id });
}

const updateStudent = async (id, data) => {
  return await Student.findOneAndUpdate({ id }, data, { new: true });
}

const deleteStudent = async (id) => {
  return await Student.findOneAndDelete({ id });
}

export { getAllStudents, addStudent, getStudentById, updateStudent, deleteStudent,};