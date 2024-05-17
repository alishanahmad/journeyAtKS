import StudentModel from "../model/student/index.js"
import marksModel from "../model/marks/index.js";
import teacherModel from "../model/teacher/index.js";
const syncDB=async()=>{
    await StudentModel.sync({alter:true,force:false})
    await marksModel.sync({alter:true,force:false})
    await teacherModel.sync({alter:true,force:false})

}
export default syncDB;