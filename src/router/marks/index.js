import { Router } from "express";

import marksController from "../../controller/marks/index.js";
const marksRoute = Router();

//finding all marks.
marksRoute.get("/marks", marksController.getAllMarks);

//finding marks by rollNumber.
marksRoute.get("/marks/:id", marksController.getSingleMarks);

// Adding new marks
marksRoute.post("/marks", marksController.postMarks);

// PUT - Update a marks by rollNumber
marksRoute.put("/marks/:id", marksController.updateMarks);

// Deleting marks
marksRoute.delete("/marks/:id", marksController.deleteMarks);

export default marksRoute;
