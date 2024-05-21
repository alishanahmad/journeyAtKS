import studentModel from "../../model/student/index.js";

// { rollNumber:1,name: "Hashir", age: 23, section: "MR17", major:"BSCS" },
//     { rollNumber:2,name: "Hamza", age: 19, section: "MR13", major:"BS Psy" },
//     { rollNumber:3,name: "Zubair", age: 21, section: "MR16", major:"BS Phy" },
//     { rollNumber:4,name: "Kaleem Ul Allah", age: 20, section: "MR16", major:"BS English" },
//     { rollNumber:5,name: "Usman", age: 18, section: "MR16", major:"BS Math" },
//     { rollNumber:6,name: "Muneeba", age: 22, section: "MR16", major:"BBA" },

const studentController = {
  getAllStudents: async (req, res) => {
    try {
      const students = await studentModel.findAll(); //{
        //   where: {
        //     name: "Hashir",

        //   },
        //   order: [["createdAt", "DESC"]],
        //   limit: 2,
        // }
        
      res.json({
        students,
        //studentData
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },

  getSingleStudent: async (req, res) => {
    try {
      const id  = req.params;
      // const student=studentData.find(std=>std.rollNumber==rollNumber);std=>std.id==id
      const student = await studentModel.findOne({
        where: { id },
      });
      // res.status(200).json({ student });
      if(!id){
          return res.status(404).json({
              message:"not found"
          });

      }
      
      return res.status(200).json({ student });
      
      // else{
      //   res.status(200).json({
      //     student,
      //   })
      // }
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "Internal Server Error",
        error,
      });
    }
  },
  postStudent: async (req, res) => {
    try {
      const payload = req.body;
      const student = new studentModel();
      student.name = payload.name;
      student.age = payload.age;
      student.section = payload.section;
      student.major = payload.major;
      await student.save();
      res.json({
        message: "student added successfully", //,studentData,
        student,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  updateStudent: async (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      // const index = studentData.findIndex(
      //   (std) => std.rollNumber == rollNumber
      // );
      const student = await studentModel.findOne({ where: { id } });
      if (student == null) {
        res.status(404).json({
          message: "student not found",
        });
      }
      if (payload.age) {
        student.age = payload.age;
      }
      if (payload.major) {
        student.major = payload.major;
      }
      await student.save();
      // students[studentIndex].name = payload.name
      //   ? payload.name
      //   : studentData[studentIndex].name;
      // studentData[studentIndex].class = payload.class
      //   ? payload.class
      //   : studentData[studentIndex].class;

      res.status(200).json({
        message: "student updated successfully",
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  deleteStudent: async (req, res) => {
    // try {
    //   const { id } = req.params;
    //   const index = studentData.findIndex(
    //     (std) => std.rollNumber == rollNumber
    //   );
    //   if (index == -1) {
    //     return res.status(404).json({
    //       message: "Teeacher not found",
    //     });
    //   } else {
    //     studentData.splice(index, 1);
    //     res.status(200).json({
    //       message: "student deleted successfully",
    //     });
    //   }
    // } catch (error) {
    //   res.status(500).json({ message: "Internal server error" });
    // }
    const { id } = req.params;
    const student = await studentModel.findOne({ where: { id } });
    if(!student){
      res.status(404).json({
        message: "student not found",
      })
    }
    await student.destroy();
    res.json({
      message: "Student of Roll Number Deleted successfully",
      student,
    });
  },
};
export default studentController;
