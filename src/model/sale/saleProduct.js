// import { DataTypes } from "sequelize";
// import sequelize from "../../db/config.js";
// import saleModel from "./sales.js";
// const saleProductModel=sequelize.define(
//     "saleProduct",
//     {
//         productName:{
//             type:DataTypes.STRING,
//             allowNull: false
//         },
//         pruductPrice:{
//             type:DataTypes.INTEGER,
//             allowNull: false
//         },
//         pruductQuantity:{
//             type:DataTypes.INTEGER,
//             allowNull:false
//         }
//     }
// )
// saleModel.hasMany(saleProductModel);
// saleProductModel.belongsTo(saleModel);

// export default saleProductModel;
import sequelize from '../../db/config.js';
import { DataTypes } from 'sequelize';
import saleModel from './sales.js';
import productModel from './products.js';

const saleProductsModels = sequelize.define(
  'SaleProducts',
  {
    productName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    rate: {
        type: DataTypes.DOUBLE
    }
  }
);

saleModel.hasMany(saleProductsModels);
saleProductsModels.belongsTo(saleModel);
productModel.hasMany(saleProductsModels);
saleProductsModels.belongsTo(productModel);


export default saleProductsModels;
