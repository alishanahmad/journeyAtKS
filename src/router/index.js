import departmentRoutes from "./department/index.js";
import marksRoute from "./marks/index.js";
import studentRoute from "./student/index.js";
import teacherRoute from "./teacher/index.js";

const allRoutes = [marksRoute, studentRoute, teacherRoute, departmentRoutes];
export default allRoutes;
