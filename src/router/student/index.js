import {Router} from "express"
import studentController from "../../controller/student/index.js"
const studentRouter=Router();

studentRouter.get("/students",studentController.getAllStudents);

export default studentRouter;