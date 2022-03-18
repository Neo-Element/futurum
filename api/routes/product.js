const express = require("express");
const productRouter = express.Router();
const ProductsControllers = require("../controllers/productsController");

//ALL PRODUCTS //MARI/BACK
productRouter.get("/", ProductsControllers.getAllProducts);
//GET PRODUCT//MARI/BACK
productRouter.get("/:id", ProductsControllers.getProduct);
//GET PRODUCT BY CATEGORY//MARI/BACK
productRouter.get("/categories/:id", ProductsControllers.productByCategory);
//UPDATE PRODUCT//MARI/BACK
productRouter.put("/edit/:productId", ProductsControllers.updateProduct);
// ADD PRODUCT//MARI/BACK
productRouter.post("/add", ProductsControllers.addProduct);
//DELETE PRODUCT//MARI/BACK
productRouter.delete("/remove", ProductsControllers.deleteProduct);

module.exports = productRouter;
