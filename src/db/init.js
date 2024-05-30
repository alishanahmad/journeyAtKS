import marksModel from "../model/marks/index.js";
import productModel from "../model/product/index.js";
import saleModel from "../model/sale/sales.js";
import saleProductModel from "../model/sale/saleProduct.js"
import studentModel from "../model/student/index.js";
import teacherModel from "../model/teacher/index.js";
import userModel from "../model/user/index.js";
import tokenModel from "../model/auth/index.js";
import sequelize from "./config.js";

const syncDB=async()=>{
    await sequelize.sync({ alter: true, force: false });  
}
export default syncDB;