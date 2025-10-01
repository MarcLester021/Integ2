import Student from "../models/Student.js";

const getAllStudents = async (req, res) => {
    return await Student.find();
}

const addStudent = async (data) => {
    const addStudent = async (data);
    const newStudent = new Student(data);
    return await newStudent.save();
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

export default { getAllStudents, addStudent, getStudentById, updateStudent, deleteStudent };