import studentService from "../services/studentService.js";

export const getAllStudents = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        res.json(students);
    } catch (error) {
        res.status(500).json(({ message: error.message }));
    }
}

export const createStudent = async (req, res) => {
    try {
        const student = await studentService.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json(({ message: error.message }));
    }
}

export const getStudentById = async (req, res) => {
    try {
        const student = await studentService.getStudentById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json(({ message: error.message }));
    }   
}
export const updateStudent = async (req, res) => {
    try {
        const student = await studentService.updateStudent(req.params.id, req.body);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(400).json(({ message: error.message }));
    }   
}

export const deleteStudent = async (req, res) => {
    try {
        const student = await studentService.deleteStudent(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json({ message: "Student deleted successfully" });
    }    
    catch (error) {
        res.status(500).json(({ message: error.message }));
    }
} 