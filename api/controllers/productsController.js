const ProductService = require("../services/productsService");

//ALL PRODUCTS
exports.getAll=async(req,res,next)=>{
  const products= await ProductService.serviceGetAll(req, next)
  return products ? res.json(products) : res.sendStatus(404)
}

//GET PRODUCT
exports.getProduct = async (req, res) => {
  const product = await ProductController.serviceGetProduct(req);
  return product ? res.json(product) : res.sendStatus(404);
};

//ACTUALIZAR PRODUCTO
exports.updateProduct = async (req, res, next) => {
  const product= await ProductController.serviceUpdateProduct(req, next);
  return res.status(201).json(product);
 
};
//AÑADIR PRODUCTO
exports.addProduct = async (req, res, next) => {
  const product= ProductController.serviceAddProduct(req,next)
  return  res.status(201).send(product);
  
};
//BORRAR PRODUCTO
exports.delete = async (req, res, next) => {
  const result= ProductController.serviceDeliteProduct(req, next)
    result
      ? res.status(204).send([])
      : res.status(404).send("The course you want to delete doesn't exist.");
  
};
