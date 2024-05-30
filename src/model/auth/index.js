import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const tokenModel=sequelize.define("Token",{
    Token:{
        type:DataTypes.STRING(500),
        allowNull:false
    }
});
export default tokenModel;