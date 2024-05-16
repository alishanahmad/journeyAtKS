import { Router } from "express";

import marksController from "../../controller/marks/index.js";
const marksRoute=Router();

//finding all marks.
marksRoute.get("/marks",marksController.getAllMarks);

//finding marks by rollNumber.
marksRoute.get("/marks/:rollNumber",marksController.getSingleMarks);

// Adding new marks
marksRoute.post("/marks", marksController.postMarks);

// PUT - Update a marks by rollNumber
marksRoute.put("/marks/:rollNumber", marksController.updateMarks);

// Deleting marks
marksRoute.delete("/marks/:rollNumber", marksController.deleteMarks);

export default marksRoute;