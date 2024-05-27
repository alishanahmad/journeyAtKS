import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
const userModel = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false,
  }
});
export default userModel;
