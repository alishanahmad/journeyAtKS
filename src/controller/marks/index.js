const marksController={
    getAllMarks:(req,res)=>{
        try{
            res.json({
                message:"all Marks"
            })
        }
        catch(error){
            res.json({
                message:"error"
            })
        }
        
    }
};
export default marksController;