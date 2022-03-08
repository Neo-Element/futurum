const express = require("express");
const router = express.Router();
const addProductRouter = require("./addProduct");
const findProductRouter = require("./findProduct");
const productRouter = require("./product");
const modifyProductRouter = require("./modifyProduct");
const deleteProductRouter = require("./deleteProduct");

app.use("/addProduct", addProductRouter);
app.use("/findProduct", findProductRouter);
app.use("/product", productRouter);
app.use("/modifyProduct", modifyProductRouter);
app.use("/deleteProduct", deleteProductRouter);

module.exports = router;
