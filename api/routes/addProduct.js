const express = require("express");
const addProductRouter = express.Router();
const Products = require("../models/Products"); //REVISAR QUE COINCIDA CON LA RUTA CORRESPONDIENTE

addProductRouter.post("/", (req, res) => {
  Products.create(req.body)
    .then((product) => res.status(201).json(product))
    .catch((err) => console.log(err));
});

module.exports = addProductRouter;
