import { Router } from "express";
import studentController from "../../controller/student/index.js";
const studentRoute=Router();
//finding all students.
studentRoute.get("/students",studentController.getAllStudents);
//finding student by id.
studentRoute.get("/student/:id",studentController.getSingleStudent);

//Adding new student
studentRoute.post("/students", studentController.postStudent);

// PUT - Update a student by rollNumber
studentRoute.put("/student/:id", studentController.updateStudent);

//Deleting student
studentRoute.delete("/student/:id", studentController.deleteStudent);
export default studentRoute;