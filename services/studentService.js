import Student from "../models/Student.js";

const getAllStudents = async () => {
    return await Student.find();
}

const createStudent = async (data) => {
    const student = new Student(data);
    return await student.save();
};

export default { getAllStudents, createStudent };