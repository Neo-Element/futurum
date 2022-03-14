const express = require("express");
const router = express.Router();
const routerShoppingCart = require("./shoppingCart");
const productRouter = require("./product");
const usersRouter = require("./users");

router.use("/shoppingCard", routerShoppingCart);
router.use("/product", productRouter);
router.use("/users", usersRouter);

module.exports = router;
