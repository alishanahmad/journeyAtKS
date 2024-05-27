import { Router } from "express";
import ProductController from "../../controller/product/index.js";
const productsRouter = Router();

productsRouter.get("/products", ProductController.getAll);
productsRouter.get("/product/:id", ProductController.getSingle);
productsRouter.post("/product", ProductController.post);

export default productsRouter;