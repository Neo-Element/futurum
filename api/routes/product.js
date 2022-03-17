const express = require("express");
const productRouter = express.Router();
const ProductsControllers= require("../controllers/productsController")


//OBTENER TODOS LOS PRODUCTOS
productRouter.get("/", ProductsControllers.getAll);
//OBTER PRODUCTO INDIVUDUAL
productRouter.get("/:product", ProductsControllers.getProduct);
//EDITAR PRODUCT  
productRouter.put("/:productId", ProductsControllers.updateProduct);
//AÑADIR CURSO
productRouter.post("/add", ProductsControllers.addProduct);
//BORRAR CURSO
productRouter.delete("/remove", ProductsControllers.delete);

/* En el merge no vinieron mas funciones de product 

*/
/* productRouter.post("/add", (req, res) => {
  console.log("REQ BODY -->", req.body); */


productRouter.get("/", (req, res) => {
   Products.findAll()
    .then((products) => (products ? res.status(200).json(products) : res.sendStatus(404)))
    .catch((err) => console.log(err));
});



productRouter.get("/:id", (req, res) => {

  Products.findByPk(req.params.id)
    .then((product) => {
      (product ? res.status(200).json(product) : res.sendStatus(404))})
    .catch((err) => console.log(err));
});

productRouter.get("/categories/:id", (req, res, next) => {
  console.log("PARAMS->", req.params);
  Products.findAll({ where: { categoriesId: req.params.id } })
    .then((courses) => {
      console.log("CURSOS->", courses);
      res.send(courses)})
    .catch(next);
});

productRouter.put("/:productId", (req, res) => {
  console.log("req.body back", req.body)
  Products.update(req.body, {
    where: {
      id: req.params.productId,
    },
    returning: true,
    plain: true,
  }).then((result) => {
    console.log("DENTRO DEL THEN BACK",result)
    const product = result[1];
    res.status(201).json(product);
  });
});



productRouter.post("/add", (req, res) => {

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




module.exports = productRouter;
