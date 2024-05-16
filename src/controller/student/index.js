import studentModel from "../../model/student/index.js";

const studentController = {
  getAllStudents: async (req, res) => {
    try {
      const students = await StudentModel.findAll({
        where: {
          name: "Hashir",
        },
        order: [["createdAt", "DESC"]],
        limit: 2,
      });
      res.json({
        StudentData: students,
        //studentData
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },
  getSingleStudent: async (req, res) => {
    try {
      const { id } = req.params;
      // const student=studentData.find(std=>std.rollNumber==rollNumber);std=>std.id==id
      const students = await StudentModel.find({
        where: {
          id: id,
        },
      });
      res.status(200).json({ StudentData: students });
      // if(!students){
      //     return res.status(404).json({
      //         message:"not found"
      //     });
      // }
      // else{

      // }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error,
      });
    }
  },
  postStudent: async (req, res) => {
    try {
      const payload = req.body;

      const student = await studentModel.create({
        name: payload.name,
        age: payload.age,
        section: payload.section,
        major: payload.major,
      });

      res.json({
        message: "student added successfully", //,studentData,
        student: student,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  updateStudent: (req, res) => {
    try {
      const { rollNumber } = req.params;
      const payload = req.body;
      const index = studentData.findIndex(
        (std) => std.rollNumber == rollNumber
      );
      if (index == -1) {
        res.status(404).json({
          message: "student not found",
        });
      }

      if (payload.name) {
        studentData[index].name = payload.name;
      }
      if (payload.major) {
        studentData[index].major = payload.major;
      }

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
  deleteStudent: (req, res) => {
    try {
      const { rollNumber } = req.params;
      const index = studentData.findIndex(
        (std) => std.rollNumber == rollNumber
      );
      if (index == -1) {
        return res.status(404).json({
          message: "Teeacher not found",
        });
      } else {
        studentData.splice(index, 1);
        res.status(200).json({
          message: "student deleted successfully",
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
export default studentController;
