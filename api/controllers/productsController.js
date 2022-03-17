const ProductService = require("../services/productsService");

//ALL PRODUCTS
exports.getAll = async (req, res, next) => {
  const products = await ProductService.serviceGetAll(req, next);
  return products ? res.status(200).json(products) : res.sendStatus(404);
};

//GET PRODUCT
exports.getProduct = async (req, res, next) => {
  const product = await ProductService.serviceGetProduct(req, next);
  return product ? res.status(200).json(product) : res.sendStatus(404);
};

//GET PRODUCT BY CATEGORY
exports.productByCategory = async (req, res, next) => {
  const courses = await ProductService.serviceProductByCategory(req, next);
  return res.send(courses);
};

//UPDATE PRODUCT
exports.updateProduct = async (req, res, next) => {
  const product = await ProductService.serviceUpdateProduct(req, next);
  return res.status(201).json(product);
};

//ADD PRODUCT
exports.addProduct = async (req, res, next) => {
  const product = ProductService.serviceAddProduct(req, next);
  return res.status(201).send(product);
};

//DELETE PRODUCT
exports.delete = async (req, res, next) => {
  const result = ProductService.serviceDeliteProduct(req, next);
  result
    ? res.status(204).send([])
    : res.status(404).send("The course you want to delete doesn't exist.");
};
