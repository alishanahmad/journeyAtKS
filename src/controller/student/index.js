const studentController={
    getAllStudents:(req,res)=>{
        try{
            res.json({
                message:"All Students"
            });
        }
        catch(error){
            console.log("Student API does not work.",error);
        }
    }
};

export default studentController;