// const teacherData = [
//     { id:1,name: "Ali Shan", age: 28, section: "MR17", subject:"Technical" },
//     { id:2,name: "Mudassir", age: 32, section: "MR13", subject:"Physics" },
//     { id:3,name: "Maryam", age: 35, section: "MR16", subject:"Urdu" },
//     { id:4,name: "Uswa", age: 25, section: "MR16", subject:"English" },
//     { id:5,name: "Ali Raza", age: 45, section: "MR16", subject:"Math" },
//     { id:6,name: "Safdar", age: 36, section: "MR16", subject:"SoftSkills" },
// ];

const teacherController = {
  getAllTeachers: (req, res) => {
    try {
      res.json({
        data: teacherData,
        //teacherData
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getSingleTeacher: (req, res) => {
    try {
      const { id } = req.params;
      const teacher = teacherData.find((teach) => teach.id == id);
      if (!teacher) {
        return res.status(404).json({
          message: "not found",
        });
      } else {
        res.status(200).json({ data: teacher });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  postTeacher: (req, res) => {
    try {
      const newTeacher = req.body;
      teacherData.push(newTeacher);
      res.json({
        message: "Teacher added successfully",
        teacherData,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  updateTeacher: (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      const index = teacherData.findIndex((teach) => teach.id == id);
      if (index == -1) {
        res.status(404).json({
          message: "Teacher not found",
        });
      }

      if (payload.name) {
        teacherData[index].name = payload.name;
      }
      if (payload.subject) {
        teacherData[index].subject = payload.subject;
      }

      // students[studentIndex].name = payload.name
      //   ? payload.name
      //   : students[studentIndex].name;
      // students[studentIndex].class = payload.class
      //   ? payload.class
      //   : students[studentIndex].class;

      res.status(200).json({
        message: "Teacher updated successfully",
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  deleteTeacher: (req, res) => {
    try {
      const { id } = req.params;
      const index = teacherData.findIndex((teach) => teach.id == id);
      if (index == -1) {
        return res.status(404).json({
          message: "Teeacher not found",
        });
      } else {
        teacherData.splice(index, 1);
        res.status(200).json({
          message: "Teacher deleted successfully",
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
export default teacherController;
