import departmentRoute from "./department/index.js";
import marksRoute from "./marks/index.js";
import productsRouter from "./product/index.js";
import salesRouter from "./sale/index.js";
import studentRoute from "./student/index.js";
import teacherRoute from "./teacher/index.js";
import userRoute from "./user/index.js";

const allRoute = [marksRoute, studentRoute, teacherRoute, departmentRoute,salesRouter,productsRouter,userRoute];
export default allRoute;
