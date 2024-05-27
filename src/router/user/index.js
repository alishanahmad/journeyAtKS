import { Router } from "express";
import userController from "../../controller/user/index.js";
const userRoute=Router();

userRoute.post("/signin",userController.signin)
userRoute.post("/signup",userController.signup)



export default userRoute;
