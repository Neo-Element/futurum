const express = require("express");
const productRouter = express.Router();
const Products = require("../models/Products"); //REVISAR QUE COINCIDA CON LA RUTA CORRESPONDIENTE
const fakeData = require("../utils/fakeData")

productRouter.get("/", (req, res) => {
  // Products.findAll()
  //   .then((products) => (products ? res.json(products) : res.sendStatus(404)))
  //   .catch((err) => console.log(err));
  res.send(fakeData[0])
});

module.exports = productRouter;
