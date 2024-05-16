import { DataTypes } from "sequelize"; 
import sequelize from "../../db/config.js"

const studentModel=sequelize.define(
"Student", {
    //MOdel attributes are defined here
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    section:{
        type:DataTypes.STRING,
        allowNull:false
    },
    major:{
        type:DataTypes.STRING,
        allowNull:false
    }


},
);
export default studentModel;