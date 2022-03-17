const express = require("express");
const productRouter = express.Router();
const ProductsControllers= require("../controllers/productsController")



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

/* productRouter.post("/add", (req, res) => {
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
}); */




module.exports = productRouter;
