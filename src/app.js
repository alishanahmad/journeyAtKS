import "dotenv/config";
import express from "express";
import allRoute from "./router/index.js";
import { connectionDB } from "./db/config.js";
import syncDB from "./db/init.js";

// import teacherRoute from "./router/teacher/index.js";
// import studentRoute from "./router/student/index.js";
// import marksRoute from "./router/marks/index.js";
connectionDB();
syncDB().then(() => console.log("db synced"));

const app = express();

app.use(express.json());

// app.use(teacherRoute);
// app.use(studentRoute);
// app.use(marksRoute);

app.use(allRoute);

// listing the port
app.listen(3000, () => {
  console.log("Server is running at port: 3000");
});
