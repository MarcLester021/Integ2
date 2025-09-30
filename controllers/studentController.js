import studentService from "../services/studentService.js";

export const getStudent = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        res.json(students);
    } catch (error) {
        res.status(500).json(({ message: error.message }));
    }
}

export const createStudent = async (req, res) => {
    try {
        const stuent = await studentService.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json(({ message: error.message }));
    }
}