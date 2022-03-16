const express = require("express");
const router = express.Router();
const routerOrders = require("./orders");
const productRouter = require("./product");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");
const reviewsRouter = require("./reviews");

router.use("/orders", routerOrders);
router.use("/product", productRouter);
router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);
router.use("/reviews", reviewsRouter);

module.exports = router;
