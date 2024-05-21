import studentModel from "../model/student/index.js"
import marksModel from "../model/marks/index.js";
import teacherModel from "../model/teacher/index.js";
import productModel from "../model/sale/products.js";
import saleModel from "../model/sale/sales.js";
import saleProductModel from "../model/sale/saleProduct.js"


const syncDB=async()=>{
    await studentModel.sync({alter:true,force:false})
    await marksModel.sync({alter:true,force:false})
    await teacherModel.sync({alter:true,force:false})
    await productModel.sync({alter:true,force:false})
    await saleModel.sync({alter:true,force:false})
    await saleProductModel.sync({alter:true,force:false})
    

}
export default syncDB;