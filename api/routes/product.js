const express = require("express");
const productRouter = express.Router();
const ProductsControllers = require("../controllers/productsController");
//ALL PRODUCTS
productRouter.get("/", ProductsControllers.getAll);

//GET PRODUCT
productRouter.get("/:id", ProductsControllers.getProduct);

//GET PRODUCT BY CATEGORY
productRouter.get("/categories/:id", ProductsControllers.productByCategory);

//UPDATE PRODUCT
productRouter.put("/:productId", ProductsControllers.updateProduct);

// ADD PRODUCT
productRouter.post("/add", ProductsControllers.addProduct);

//DELETE PRODUCT
productRouter.delete("/remove", ProductsControllers.delete);

module.exports = productRouter;
