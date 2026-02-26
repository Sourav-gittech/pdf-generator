const generateStudentPDF = require("../utils/generateStudentPDF");
const studentModel = require("./../models/studentModel");

class StudentController {
    async addStudent(req, res) {
        try {
            const { first_name, last_name, email, phone,
                family_details: { father_name, mother_name, local_gurdian_name, gurdian_contact_no },
                address: { street, city, full_address, country, pin } } = req.body;

            const studentObj = new studentModel({
                first_name, last_name, email, phone,
                family_details: { father_name, mother_name, local_gurdian_name, gurdian_contact_no },
                address: { street, city, full_address, country, pin }
            });

            const student = await studentObj.save();

            return res.status(201).json({
                success: true,
                message: "Student added successfully",
                data: student
            })
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }

    async getAllStudents(req, res) {
        try {
            const students = await studentModel.find();

            return res.status(200).json({
                success: true,
                message: "All available students",
                count: students.length,
                data: students
            })
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }

    async deleteStudentDetails(req, res) {
        try {
            const studentId = req.params.studentId;

            await studentModel.findByIdAndDelete(studentId);

            return res.status(200).json({
                success: true,
                message: "Student deleted successfully"
            })
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }

    async studentPDF(req, res) {
        try {
            const studentId = req.params.studentId;

            const student = await studentModel.findById(studentId);

            generateStudentPDF(student, res);
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }
}

module.exports = new StudentController();