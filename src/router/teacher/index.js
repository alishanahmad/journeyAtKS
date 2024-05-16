import {Router} from "express"
import teacherController from "../../controller/teacher/index.js"
const teacherRoute=Router();

teacherRoute.get("/teachers",teacherController.getAllTeacher);

export default teacherRoute;