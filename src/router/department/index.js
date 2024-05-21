import { Router } from "express";

import departmentController from "../../controller/department/index.js";
const departmentRoute = Router();

//finding all Department.
departmentRoute.get("/departments", departmentController.getAllDepartment);

//finding Department by id.
departmentRoute.get(
  "/Department/:id",
  departmentController.getSingleDepartment
);

// Adding new Department
departmentRoute.post("/Departments", departmentController.postDepartment);

// PUT - Update a Department by id
departmentRoute.put("/Department/:id", departmentController.updateDepartment);

// Deleting Department
departmentRoute.delete(
  "/Department/:id",
  departmentController.deleteDepartment
);

export default departmentRoute;
