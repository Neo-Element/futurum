const express = require("express");
const productRouter = express.Router();
const { Products, Categories } = require("../models");
const fakeData = require("../utils/fakeData");

productRouter.get("/", (req, res) => {
   Products.findAll()
    .then((products) => (products ? res.json(products) : res.sendStatus(404)))
    .catch((err) => console.log(err));
});

productRouter.get("/:id", (req, res) => {
  Products.findByPk(req.params.id)
    .then((product) => (product ? res.json(product) : res.sendStatus(404)))
    .catch((err) => console.log(err));
});

productRouter.put("/:productId", (req, res) => {
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



productRouter.post("/add", (req, res) => {
  console.log("REQ BODY -->", req.body);

const { category } = req.body;

Categories.findOrCreate({where: {name: category }})
.then(data => {
  const category = data[0]
  Products.create(req.body)
  .then((product) => {
    product.setCategories(category)
    res.status(201).send(product)})
  .catch((err) => console.log(err));
})
});



productRouter.delete("/remove", (req, res) => {
  const { productId } = req.query;
  // console.log("esto es req.body -->",req.query);

  Products.destroy({
    where: {
      id: productId,
    },
  }).then((result) => {
    result
      ? res.status(204).send([])
      : res.status(404).send("The course you want to delete doesn't exist.");
  });
});

module.exports = productRouter;
