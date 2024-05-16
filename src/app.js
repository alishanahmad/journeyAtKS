import express from "express";
import allRoutes from "./router/index.js";
const app=express();
app.use(express.json());
app.use(allRoutes)
// app.get("/all",(req,res)=>{
//     res.json({
//        message: "Hello World"
//     });
// })
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})