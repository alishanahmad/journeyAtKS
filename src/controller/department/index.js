const departmentData = [
  {
    id: 132,
    Name: "Physics",
    HOD: "Musaffa",
    teacherStrength: 45,
    totalRooms: 21,
  },
  {
    id: 245,
    Name: "Computer Science",
    HOD: "Haider",
    teacherStrength: 34,
    totalRooms: 24,
  },
  {
    id: 373,
    Name: "Sociology",
    HOD: "Jalal",
    teacherStrength: 16,
    totalRooms: 22,
  },
  {
    id: 469,
    Name: "Bio-Technology",
    HOD: "Qazmi",
    teacherStrength: 30,
    totalRooms: 29,
  },
  {
    id: 512,
    Name: "Mathmatics",
    HOD: "Rizvi",
    teacherStrength: 25,
    totalRooms: 24,
  },
  {
    id: 683,
    Name: "Mass Communication",
    HOD: "Zafar Iqbal",
    teacherStrength: 33,
    totalRooms: 26,
  },
];
const departmentController = {
  getAllDepartment: (req, res) => {
    try {
      res.json({
        data: departmentData,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getSingleDepartment: (req, res) => {
    try {
      const { id } = req.params;
      const depart = departmentData.find((dep) => dep.id == id);
      if (!depart) {
        return res.status(404).json({
          message: "not found",
        });
      } else {
        res.status(200).json({ data: depart });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  postDepartment: (req, res) => {
    try {
      const newDepartment = req.body;
      departmentData.push(newDepartment);
      res.json({
        message: "student added successfully",
        departmentData,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  updateDepartment: (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      const index = departmentData.findIndex((std) => std.id == id);
      if (index == -1) {
        res.status(404).json({
          message: "Department not found",
        });
      }

      if (payload.english) {
        departmentData[index].english = payload.english;
      }
      if (payload.pakStudy) {
        departmentData[index].pakStudy = payload.pakStudy;
      }

      // studentsDepartment[studentIndex].english = payload.english
      //   ? payload.english
      //   : departmentData[studentIndex].english;
      // departmentData[studentIndex].class = payload.class
      //   ? payload.class
      //   : departmentData[studentIndex].class;

      res.status(200).json({
        message: "student updated successfully",
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  deleteDepartment: (req, res) => {
    try {
      const { id } = req.params;
      const index = departmentData.findIndex((std) => std.id == id);
      if (index == -1) {
        return res.status(404).json({
          message: "Teeacher not found",
        });
      } else {
        departmentData.splice(index, 1);
        res.status(200).json({
          message: "Department deleted successfully",
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
export default departmentController;
