import { Op } from "sequelize";

import saleModel from "../../model/sale/sales.js";
import saleProductsModels from "../../model/sale/saleProduct.js";

const saleController = {
  get: async (req, res) => {
    try {
      const sale = await saleModel.findAll();
      res.json({
        message: "Sales",
        sale,
      });
    } catch (error) {
      res.status(404).json(error);
    }
  },
  getbySaleProduct: async (req, res) => {
    try {
      const productName = req.query.productName;
      const sale = await saleModel.findAll({
        include: [
          {
            model: saleProductsModels,
            attributes: ["productName"],
            where: {
              productName: productName,
            },
          },
        ],
      });
      const saleId = sale.map((ele) => ele.id);
      res.json({
        message: "Sale with saleProduct as book",
        sale,
        saleId,
      });
    } catch (error) {
      res.status(404).json(error);
    }
  },
  getbyamount: async (req, res) => {
    try {
      const amount = req.query.amount;
      const sale = await saleModel.findAll({
        where: {
          amount: {
            [Op.gte]: amount,
          },
        },
      });
      const saleId = sale.map((ele) => ele.id);
      res.json({
        message: "Sale with Amount",
        sale,
        saleId,
      });
    } catch (error) {
      res.status(404).json(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const sale = await saleModel.findByPk(id, {
        include: [
          {
            model: saleProductsModels,
            include: [productModel],
          },
        ],
      });
      res.json({
        message: "Get single Sale",
        sale,
      });
    } catch (error) {
      res.status(404).json(error);
    }
  },
  post: async (req, res) => {
    try {
      const payload = req.body;
      const sale = new saleModel();
      const saleRate = payload.saleProducts.map((ele) => ele.rate);
      sale.amount = saleRate.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      await sale.save();
      const saleProducts = payload.saleProducts.map((ele) => {
        return {
          ...ele,
          SaleId: sale.id,
          ProductId: 2,
        };
      });
      const saleProductName = saleProducts.map((ele) => {
        return ele.productName;
      });
      await saleProductsModels.bulkCreate(saleProducts);

      res.json({
        message: "Post Sale",
        sale,
        saleProducts,
        saleProductName,
      });
    } catch (error) {
      res.status(404).json(error);
    }
  },
  postProducts: async (req, res) => {
    try {
      const payload = req.body;
      const product = new productModel();
      product.name = payload.name;
      product.stock = payload.stock;
      product.price = payload.price;
      await product.save();
      res.json({
        message: "Product Posted",
        product,
      });
    } catch (error) {
      res.status(404).json(error);
    }
  },
  put: async (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      const product = await productModel.findOne({ where: { id } });
      // payload.firstName ? product.firstName = payload.firstName :
      // payload.lastName ? product.lastName = payload.lastName :
      // payload.class ? product.class = payload.class :
      product;
      await product.save();
      res.json({
        message: "Put Student",
        product,
      });
    } catch (error) {
      res.status(404).json(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const sale = await saleModel.findByPk(id);
      if (!sale) {
        res.json({ message: "There is no Sale with this id" });
      }
      await saleProductsModels.destroy({ where: { SaleId: id } }).then(() => {
        return saleModel.destroy({ where: { id } });
      });
      res.json({
        message: "Sale Deleted",
      });
    } catch (error) {
      res.status(404).json(error);
    }
  },
};

export default saleController;
