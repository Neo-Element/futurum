const express = require("express");
const productRouter = express.Router();
const Products = require("../models/Products"); //REVISAR QUE COINCIDA CON LA RUTA CORRESPONDIENTE
const ProductsControllers= require("../controllers/products")

productRouter.get("/all", (req, res) => {
  // Products.findAll()
  //   .then((products) => (products ? res.json(products) : res.sendStatus(404)))
  //   .catch((err) => console.log(err));
  res.send(fakeData[0]);
});
//OBTER PRODUCTO INDIVUDUAL
productRouter.get("/:product", ProductsControllers.getProduct);
//EDITAR PRODUCT  
productRouter.put("/:productId", ProductsControllers.updateProduct);
//AÑADIR CURSO
productRouter.post("/add", ProductsControllers.addProduct);
//BORRAR CURSO
productRouter.delete("/remove", ProductsControllers.delete);

module.exports = productRouter;
