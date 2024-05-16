import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const departmentModel = sequelize.define(
"Marks", {
  //MOdel attributes are defined here
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  HOD: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teacherStrength: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalRooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
export default departmentModel;
