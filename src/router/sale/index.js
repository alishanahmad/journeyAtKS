
// import { Router } from "express";
// import saleController from "../../controller/sale/index.js";

// const salesRouter = Router();

// salesRouter.get("/sales", saleController.get);
// salesRouter.get("/sale", saleController.getbySaleProduct);
// salesRouter.get("/saleswithamount", saleController.getbyamount);
// salesRouter.get("/sale/:id", saleController.getOne);
// salesRouter.post("/sale", saleController.post);
// salesRouter.post("/saleproduct", saleController.postProducts);
// salesRouter.delete("/sale/:id", saleController.delete);

// export default salesRouter;


import { Router } from "express";
import SalesController from "../../controller/sale/index.js";
const salesRouter = Router();

salesRouter.get("/sales", SalesController.getAll);
salesRouter.get("/sales/:id", SalesController.getSingle);
salesRouter.post("/sales", SalesController.post);
salesRouter.delete("/sales/:id", SalesController.delete);
// salesRouter.get("/sale/:productName", SalesController.getSingleProduct);
// salesRouter.delete("/sales/:id", SalesController.delete);

export default salesRouter;
