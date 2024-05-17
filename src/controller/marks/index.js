// const studentMarks = [
//     { id:1,subjectMarks:[{english:"65",urdu:"45",phy:"73",pakStudy:"34"}]},
//     { id:2,subjectMarks:[{english:"76",urdu:"82",phy:"74",pakStudy:"45"}]},
//     { id:3,subjectMarks:[{english:"73",urdu:"55",phy:"65",pakStudy:"53"}]},
//     { id:4,subjectMarks:[{english:"55",urdu:"45",phy:"78",pakStudy:"39"}]},
//     { id:5,subjectMarks:[{english:"65",urdu:"53",phy:"39",pakStudy:"55"}]},
//     { id:6,subjectMarks:[{english:"45",urdu:"78",phy:"53",pakStudy:"73"}]},
// ];

import marksModel from "../../model/marks/index.js";
// import studentModel from "../../model/student/index.js";

const marksController = {
  getAllMarks: async (req, res) => {
    try {
      const studentMarks = await marksModel.findAll();
      res.json({
        message:"student found",
        studentMarks,
        
        //studentData
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getSingleMarks: async (req, res) => {
    try {
      const { id } = req.params;
      const studentMarks = await marksModel.findByPk(id); //((std) => std.id == id);

      // console.log("it is id of marks ",id);
      if (!studentMarks) {
        return res.status(404).json({
          message: "not found",
        });
      } 
    //   else {
    //   res.status(200).json({ studentMarks });
    // }
      res.status(200).json({ studentMarks });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error
      });
    }
  },
  postMarks: async (req, res) => {
    try {
      const payload = req.body;
      // studentMarks.push(newMarks);
      const newMarks = new marksModel();
      newMarks.english = payload.english;
      newMarks.urdu = payload.urdu;
      newMarks.phy = payload.phy;
      newMarks.pakStudy = payload.pakStudy;
      await newMarks.save();
      res.json({
        message: "student added successfully",
        newMarks,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  updateMarks: async (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      const updateMarks = await marksModel.findByPk(id); //(std) => std.id == id);
      if (!id) {
        res.status(404).json({
          message: "updateMarks not found",
        });
      }

      if (payload.english) {
        updateMarks.english = payload.english;
      }
      if (payload.pakStudy) {
        updateMarks.pakStudy = payload.pakStudy;
      }
      await updateMarks.save();

      // studentsMarks[studentIndex].english = payload.english
      //   ? payload.english
      //   : studentMarks[studentIndex].english;
      // studentMarks[studentIndex].class = payload.class
      //   ? payload.class
      //   : studentMarks[studentIndex].class;

      res.status(200).json({
        message: "student updated successfully",
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  deleteMarks: async (req, res) => {
    // try {
    //   const { id } = req.params;
    //   const index = studentMarks.findIndex((std) => std.id == id);
    //   if (index == -1) {
    //     return res.status(404).json({
    //       message: "Teeacher not found",
    //     });
    //   } else {
    //     studentMarks.splice(index, 1);
    //     res.status(200).json({
    //       message: "Marks deleted successfully",
    //     });
    //   }
    // } catch (error) {
    //   res.status(500).json({ message: "Internal server error" });
    // }
    const { id } = req.params;
    const studentMarks = await marksModel.findByPk(id);
    if(!studentMarks){
      return res.status(404).json({message:"Marks not found"});
    }

    await studentMarks.destroy();
    res.json({
      message: "Marks deleted successfully",
      studentMarks,
    });
  },
};
export default marksController;
