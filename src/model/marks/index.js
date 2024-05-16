import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const marksModel = sequelize.define("Marks", {
  //MOdel attributes are defined here
  english: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  urdu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pakStudy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
export default marksModel;
