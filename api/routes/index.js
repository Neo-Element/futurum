const express = require("express");
const router = express.Router();
const routerOrders = require("./orders");
const productRouter = require("./product");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");
const reviewsRouter = require("./reviews");
const paymentRouter = require("./payments");

router.use("/orders", routerOrders);
router.use("/product", productRouter);
router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);
router.use("/reviews", reviewsRouter);
router.use("/payments", paymentRouter);

module.exports = router;
