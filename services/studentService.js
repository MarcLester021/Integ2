import Student from "../models/Student.js";

const getAllStudents = async () => {
    return await Student.find();
}

const createStudent = async (data) => {
    const student = new Student(data);
    return await student.save();
}

const getStudentById = async (id) => {
    return await Student.findOne({ id });
}
const updateStudent = async (id, data) => {
    return await Student.findOneAndUpdate({ id }, data, { new: true, runValidators: true });
}

const deleteStudent = async (id) => {
    return await Student.findOneAndDelete({ id });
};

export default { getAllStudents, createStudent, getStudentById, updateStudent, deleteStudent };