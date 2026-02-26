const express = require("express");

const studentController = require("./../controllers/studentController");

const route = express.Router();

route.get('/', studentController.getAllStudents);
route.post('/add', studentController.addStudent);
route.delete('/delete/:studentId', studentController.deleteStudentDetails);
route.get('/pdf/:studentId', studentController.studentPDF);

module.exports = route;