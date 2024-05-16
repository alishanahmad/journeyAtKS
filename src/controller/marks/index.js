// const studentMarks = [
//     { id:1,subjectMarks:[{english:"65",urdu:"45",phy:"73",pakStudy:"34"}]},
//     { id:2,subjectMarks:[{english:"76",urdu:"82",phy:"74",pakStudy:"45"}]},
//     { id:3,subjectMarks:[{english:"73",urdu:"55",phy:"65",pakStudy:"53"}]},
//     { id:4,subjectMarks:[{english:"55",urdu:"45",phy:"78",pakStudy:"39"}]},
//     { id:5,subjectMarks:[{english:"65",urdu:"53",phy:"39",pakStudy:"55"}]},
//     { id:6,subjectMarks:[{english:"45",urdu:"78",phy:"53",pakStudy:"73"}]},
// ];

const marksController = {
  getAllMarks: (req, res) => {
    try {
      res.json({
        data: studentMarks,
        //studentData
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getSingleMarks: (req, res) => {
    try {
      const { id } = req.params;
      const marks = studentMarks.find((std) => std.id == id);
      if (!marks) {
        return res.status(404).json({
          message: "not found",
        });
      } else {
        res.status(200).json({ data: marks });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  postMarks: (req, res) => {
    try {
      const newMarks = req.body;
      studentMarks.push(newMarks);
      res.json({
        message: "student added successfully",
        studentMarks,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  updateMarks: (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      const index = studentMarks.findIndex((std) => std.id == id);
      if (index == -1) {
        res.status(404).json({
          message: "Marks not found",
        });
      }

      if (payload.english) {
        studentMarks[index].english = payload.english;
      }
      if (payload.pakStudy) {
        studentMarks[index].pakStudy = payload.pakStudy;
      }

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
  deleteMarks: (req, res) => {
    try {
      const { id } = req.params;
      const index = studentMarks.findIndex((std) => std.id == id);
      if (index == -1) {
        return res.status(404).json({
          message: "Teeacher not found",
        });
      } else {
        studentMarks.splice(index, 1);
        res.status(200).json({
          message: "Marks deleted successfully",
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
export default marksController;
