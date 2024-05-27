// import { DataTypes } from "sequelize";
// import sequelize from "../../db/config.js";

// const studentModel = sequelize.define("Student", {
//   //MOdel attributes are defined here
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   age: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   section: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   major: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });
// export default studentModel;
import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import teacherModel from "../teacher/index.js";
const studentModel = sequelize.define("Student", {
  regNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rollNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  major: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default studentModel;

studentModel.belongsToMany(teacherModel,{through:"studentTeacher"})
teacherModel.belongsToMany(studentModel,{through:"studentTeacher"})
