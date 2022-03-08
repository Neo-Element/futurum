const express = require("express");
const deleteProductRouter = express.Router();
const Products = require("../models/Products");

deleteProductRouter.delete("/", (req, res) => {
  const { id } = req.body;

  Products.destroy({
    where: {
      id: id,
    },
  }).then((result) => {
    result
      ? res.status(204).send()
      : res.status(404).send("The course you want to delete doesn't exist.");
  });
});

module.exports = deleteProductRouter;
