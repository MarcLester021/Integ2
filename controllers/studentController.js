import studentService from "../services/studentService.js";
import Student from "../models/Student.js";

export const getAllStudents = async () => {
    try {
        const students = await studentService.getAllStudents();
        res.json(students);
    } catch (error) {
        res.status(500).json(({ message: error.message }));
    }
}

export const addStudent = async (data) => {
    try {
        const student = await studentService.addStudent(data);
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json(({ message: error.message }));
    }
}

export const getStudentById = async (id) => {
    try {
        const student = await studentService.getStudentById({ id });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json(({ message: error.message }));
    }   
}
export const updateStudent = async (id, data) => {
    try {
        const student = await studentService.updateStudent({ id }, data, { new: true });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(400).json(({ message: error.message }));
    }   
}

export const deleteStudent = async (id) => {
    try {
        const student = await studentService.deleteStudent({ id });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json({ message: "Student deleted successfully" });
    }    
    catch (error) {
        res.status(500).json(({ message: error.message }));
    }
} 