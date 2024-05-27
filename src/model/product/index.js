import sequelize from '../../db/config.js';
import { DataTypes } from 'sequelize';

const productModel = sequelize.define(
  'Products',
  {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.DOUBLE
    },
    price: {
        type: DataTypes.DOUBLE
    }
  }
);


export default productModel;