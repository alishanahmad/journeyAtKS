import { where } from "sequelize";
import saleModel from "../../model/sale/sales.js";
import saleProductsModels from "../../model/sale/saleProduct.js";
// import employRouter from "../../router/employ/index.js";
import productModel from "../../model/product/index.js";

const SalesController = {
  getAll: async (req, res) => {
    try {
      const sales = await saleModel.findAll({
        // include: [ProductModel],
      });
      res.json({ data: sales });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const sale = await saleModel.findByPk(id, {
        include: [
          {
            model: saleProductsModels,
            include: [
              {
                model: productModel,
                attributes:['name']
              },
            ],
          },
        ],
      });
      if (!sale) {
        res.status(404).json({ message: "no sale with this name" });
      }
      res.status(200).json({ data: sale });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  },
  getSingleProduct: async (req, res) => {
    try {
      // const { id } = req.params;
      const { productName } = req.query;
      const payload = req.body;
      const pname = await saleProductsModels.findAndCountAll(productName, {
        where: {
          // productName: payload.productName,
          productName: "book",
        },
      });
      console.log(pname);

      if (!pname) {
        res.status(404).json({ message: "no product with this name" });
      }
      res.status(200).json({ data: pname });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  },

  post: async (req, res) => {
    try {
      const payload = req.body;
      console.log("payload", payload);
      let totalAmount = 0;
      payload.salesProducts.forEach((ele) => {
        totalAmount = totalAmount + ele.rate * ele.productQuantity;
      });
      const sale = new saleModel();
      sale.totalAmount = totalAmount;
      await sale.save();
      console.log(payload.totalAmount);
      const salesProduct = [];

      for (let index = 0; index < payload.salesProducts.length; index++) {
        const ele = payload.salesProducts[index];

        const product = await ProductModel.findByPk(ele.ProductId);
        if (ele.productQuantity > product.stock) {
          return res.status(400).json({
            message: "The product " + product.name + " has in-sufficient stock",
          });
        }

        salesProduct.push({
          ...ele,
          SaleId: sale.id,
        });
      }

      console.log("sales products", salesProduct);
      await saleProductsModels.bulkCreate(salesProduct);

      res.status(200).json({ message: "sale created", sale, salesProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const saleProduct = await saleProductsModels.findByPk(id);
      await saleProduct.destroy({ where: { id: id } });

      res
        .status(200)
        .json({ message: "product delete successfully", saleProduct });
      console.log(saleProduct);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  },
};
export default SalesController;
