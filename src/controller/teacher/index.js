// // const teacherData = [
// //     { id:1,name: "Ali Shan", age: 28, section: "MR17", subject:"Technical" },
// //     { id:2,name: "Mudassir", age: 32, section: "MR13", subject:"Physics" },
// //     { id:3,name: "Maryam", age: 35, section: "MR16", subject:"Urdu" },
// //     { id:4,name: "Uswa", age: 25, section: "MR16", subject:"English" },
// //     { id:5,name: "Ali Raza", age: 45, section: "MR16", subject:"Math" },
// //     { id:6,name: "Safdar", age: 36, section: "MR16", subject:"SoftSkills" },
// // ];
// import teacherModel from "../../model/teacher/index.js";
// const teacherController = {
//   getAllTeachers: async (req, res) => {
//     try {
//       const teachers = await teacherModel.findAll();
//       res.json({
//         teachers,
//         //teacherData
//       });
//     } catch (error) {
//       res.status(500).json({ message: "Internal server error" });
//     }
//   },
//   getSingleTeacher: async (req, res) => {
//     try {
//       const  id  = req.params.id;
//       // const teacher = teacherData.find((teach) => teach.id == id);
//       const teacher = await teacherModel.findOne({
//         where: { id },
//       });
//       if (!id) {
//         return res.status(404).json({
//           message: "not found",
//         });
//       }
//       res.status(200).json({ teacher });
//     } catch (error) {
//       console.log(error)
//       res.status(500).json({
//         message: "Internal Server Error",
//       });

//     }
//   },
//   postTeacher: async (req, res) => {
//     try {
//       const payload = req.body;
//       // teacherData.push(newTeacher);
//       const teacher = new teacherModel();
//       teacher.name = payload.name;
//       teacher.age = payload.age;
//       teacher.section = payload.section;
//       teacher.subject = payload.subject;
//       await teacher.save();

//       res.json({
//         message: "Teacher added successfully",
//         teacher,
//       });
//     } catch (error) {
//       res.status(500).json({ message: "Internal server error" });
//     }
//   },
//   updateTeacher: async (req, res) => {
//     try {
//       const { id } = req.params.id;
//       const payload = req.body;
//       // const index = teacherData.findIndex((teach) => teach.id == id);
//       const teacher = await teacherModel.findOne({ where: { id } });

//       if (!teacher) {
//         res.status(404).json({
//           message: "Teacher not found",
//         });
//       }

//       if (payload.age) {
//         teacher.age = payload.age;
//       }
//       if (payload.section) {
//         teacher.section = payload.section;
//       }
//       await teacher.save();
//       // students[studentIndex].name = payload.name
//       //   ? payload.name
//       //   : students[studentIndex].name;
//       // students[studentIndex].class = payload.class
//       //   ? payload.class
//       //   : students[studentIndex].class;

//       res.status(200).json({
//         message: "Teacher updated successfully",
//       });
//     } catch (error) {
//       res.status(500).json({ message: "Internal server error" });
//     }
//   },
//   deleteTeacher: async (req, res) => {
//     // try {
//     //   const { id } = req.params;
//     //   const index = teacherData.findIndex((teach) => teach.id == id);
//     //   if (index == -1) {
//     //     return res.status(404).json({
//     //       message: "Teeacher not found",
//     //     });
//     //   } else {
//     //     teacherData.splice(index, 1);
//     //     res.status(200).json({
//     //       message: "Teacher deleted successfully",
//     //     });
//     //   }
//     // } catch (error) {
//     //   res.status(500).json({ message: "Internal server error" });
//     // }
//     const { id } = req.params.id;
//     const teacher = await teacherModel.findOne({ where: { id } });
//     if(!teacher){
//       res.status(404).json({
//         message: "Teacher not found",
//       })
//     }
//     await teacher.destroy();
//     res.json({
//       message: "teacher deleted successfully",
//       teacher,
//     });
//   },
// };
// export default teacherController;

import studentModel from "../../model/student/index.js";
import teacherModel from "../../model/teacher/index.js";
const teacherController = {
  get: async (req, res) => {
    try {
      const teacher = await teacherModel.findAll({
        include:{model:studentModel,attributes:["rollNumber"]}
      });
      if (!teacher) {
        res.json({
          message: "teacher not found",
        });
      }

      res.json({
        message: "teacher found",
        teacher,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const teacher = await teacherModel.findOne({
        where: { id },
      });
      if (!id) {
        res.status(404).json({
          message: "teacher Not Found",
        });
      }

      res.status(200).json({
        message: `teacher found with id ${id}`,
        teacher,
      });
    } catch (error) {
      console.log(error),
        res.status(500).json({ message: "Internal server error" });
    }
  },
  post: async (req, res) => {
    const payload = req.body;
    const teacher = new teacherModel();
    // teacher.regNumber = payload.regNumber;
    // teacher.rollNumber = payload.rollNumber;
    teacher.firstName = payload.firstName;
    teacher.lastName = payload.lastName;
    teacher.age = payload.age;
    await teacher.save();
    await teacher.addStudent(payload.student);
    res.json({
      message: "teacher added successfully",
      teacher,
    });
  },
  put: async (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      const teacher = await teacherModel.findOne({
        where: { id },
      });
      if (!id) {
        res.status(404).json({
          message: "teacher Not Found",
        });
      }

      teacher.firstName = payload.firstName;
      teacher.lastName = payload.lastName;
      teacher.age = payload.age;
      await teacher.save();
      res.json({
        message: "teacher updated successfully",
        teacher,
      });
    } catch (error) {
      console.log(error),
        res.status(500).json({ message: "Internal server error" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const teacher = await teacherModel.findOne({
        where: { id },
      });
      if (!id) {
        res.status(404).json({
          message: "teacher doesn't exist",
        });
      }
      await teacher.destroy();
      res.json({
        message: `teacher of id ${id} Deleted successfully`,
        teacher,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
export default teacherController;
