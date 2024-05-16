import { Router } from "express";

import departmentController from "../../controller/department/index.js";
const departmentRoutes = Router();

//finding all Department.
departmentRoutes.get("/departments", departmentController.getAllDepartment);

//finding Department by id.
departmentRoutes.get(
  "/Department/:id",
  departmentController.getSingleDepartment
);

// Adding new Department
departmentRoutes.post("/Departments", departmentController.postDepartment);

// PUT - Update a Department by id
departmentRoutes.put("/Department/:id", departmentController.updateDepartment);

// Deleting Department
departmentRoutes.delete(
  "/Department/:id",
  departmentController.deleteDepartment
);

export default departmentRoutes;
