const express = require("express");
const router = express.Router();
const routerShoppingCart = require("./shoppingCart");
const addProductRouter = require("./addProduct");
const findProductRouter = require("./findProduct");
const productRouter = require("./product");
const modifyProductRouter = require("./modifyProduct");
const deleteProductRouter = require("./deleteProduct");
const usersRouter = require("./users");

router.use("/shoppingCard", routerShoppingCart);
router.use("/addProduct", addProductRouter);
router.use("/findProduct", findProductRouter);
router.use("/product", productRouter);
router.use("/modifyProduct", modifyProductRouter);
router.use("/deleteProduct", deleteProductRouter);
router.use("/users", usersRouter);

module.exports = router;
