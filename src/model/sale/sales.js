import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
const saleModel=sequelize.define(
    "Sales",
    {
        // totalAmount:{
        //     type:DataTypes.INTEGER,
        //     allowNull:false,
        // },
        amount: {
            type: DataTypes.DOUBLE,
            // allowNull: false
        }

})
export default saleModel;