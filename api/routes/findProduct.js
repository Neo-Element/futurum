const express = require("express");
const findProductRouter = express.Router();
const Products = require("../models/Products"); //REVISAR QUE COINCIDA CON LA RUTA CORRESPONDIENTE

findProductRouter.get("/:product", (req, res) => {
  Products.findOne({
    where: {
      productName: req.params.product, //EN REALIDAD SERÍA MEJOR BUSCAR POR ID, PREGUNTAR
    },
  })
    .then((product) => (product ? res.json(product) : res.sendStatus(404)))
    .catch((err) => console.log(err));
});

module.exports = findProductRouter;
