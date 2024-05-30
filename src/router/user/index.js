import { Router } from "express";
import userController from "../../controller/auth/index.js";
const userRoute=Router();

userRoute.post("/auth/signin",userController.signin)
userRoute.post("/auth/signup",userController.signup)



export default userRoute;
