
// import { Router } from "express";
// import teacherController from "../../controller/teacher/index.js";
// const teacherRoute=Router();
// //finding all teachers.
// teacherRoute.get("/teachers",teacherController.getAllTeachers);
// //finding teacher by id.
// teacherRoute.get("/teacher/:id",teacherController.getSingleTeacher);

// //Adding new Teacher
// teacherRoute.post("/teachers", teacherController.postTeacher);

// // PUT - Update a Teacher by ID
// teacherRoute.put("/teacher/:id", teacherController.updateTeacher);

// //Deleting Teacher
// teacherRoute.delete("/teacher/:id", teacherController.deleteTeacher);
// export default teacherRoute;
import { Router } from "express";
import teacherController from "../../controller/teacher/index.js";
const teacherRoute=Router();

teacherRoute.get("/teachers",teacherController.get)
teacherRoute.get("/teacher/:id",teacherController.getSingle)
teacherRoute.post("/teacher",teacherController.post)
teacherRoute.put("/teacher/:id",teacherController.put)
teacherRoute.delete("/teacher/:id",teacherController.delete)

export default teacherRoute;