const express = require("express");
const productRouter = express.Router();
const Products = require("../models/Products"); //REVISAR QUE COINCIDA CON LA RUTA CORRESPONDIENTE
const fakeData = require("../utils/fakeData")



//para que se llene la tabla intermedia de product_category que le setee una categoria a un producto 


productRouter.get("/", (req, res) => {
  // Products.findAll()
  //   .then((products) => (products ? res.json(products) : res.sendStatus(404)))
  //   .catch((err) => console.log(err));
  res.send(fakeData[0])
});

module.exports = productRouter;
