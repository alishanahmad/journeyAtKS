
import { Router } from "express";
import saleController from "../../controller/sale/index.js";

const salesRouter = Router();

salesRouter.get("/sales", saleController.get);
salesRouter.get("/sale", saleController.getbySaleProduct);
salesRouter.get("/saleswithamount", saleController.getbyamount);
salesRouter.get("/sale/:id", saleController.getOne);
salesRouter.post("/sale", saleController.post);
salesRouter.post("/saleproduct", saleController.postProducts);
salesRouter.delete("/sale/:id", saleController.delete);

export default salesRouter;
