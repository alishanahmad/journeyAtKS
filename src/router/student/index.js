// import { Router } from "express";
// import studentController from "../../controller/student/index.js";
// const studentRoute = Router();
// //finding all students.
// studentRoute.get("/students", studentController.getAllStudents);
// //finding student by id.
// studentRoute.get("/student/:id", studentController.getSingleStudent);

// //Adding new student
// studentRoute.post("/students", studentController.postStudent);

// // PUT - Update a student by rollNumber
// studentRoute.put("/student/:id", studentController.updateStudent);

// //Deleting student
// studentRoute.delete("/student/:id", studentController.deleteStudent);
// export default studentRoute;
import { Router } from "express";
import studentController from "../../controller/student/index.js";
import authenticateMiddleware from "../../middleware/auth.js";
const studentRoute=Router();

studentRoute.get("/students",authenticateMiddleware,studentController.get)
studentRoute.get("/student/:id",authenticateMiddleware,studentController.getSingle)
studentRoute.post("/student",studentController.post)
studentRoute.put("/student/:id",studentController.put)
studentRoute.delete("/student/:id",studentController.delete)

export default studentRoute;