import {Router} from "express"
import marksController from "../../controller/marks/index.js"
const marksRoute=Router();

marksRoute.get("/marks",marksController.getAllMarks);

export default marksRoute;