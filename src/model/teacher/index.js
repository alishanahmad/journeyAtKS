// import { DataTypes } from "sequelize";
// import sequelize from "../../db/config.js";

// const teacherModel = sequelize.define("Teacher", {
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
//   subject: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });
// export default teacherModel;
import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import studentModel from "../student/index.js";
const teacherModel = sequelize.define("Teacher", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
export default teacherModel;
