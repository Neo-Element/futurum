const express = require("express");
const modifyProductRouter = express.Router();
const Products = require("../models/Products");

modifyProductRouter.put("/:productId", (req, res) => {
  Products.update(req.body, {
    where: {
      id: req.params.productId,
    },
    returning: true,
    plain: true,
  }).then((result) => {
    const product = result[1];
    res.status(201).json(product);
  });
});

module.exports = modifyProductRouter;
