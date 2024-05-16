const teacherController={
    getAllTeacher:(req,res)=>{
        try{
            res.json({
                message:"Welcome to the teacher controller"
            })
        }
        catch(error){
            console.log("teacher not found.",error);
        }     
    }
};

export default teacherController;