const ProductService = require("../services/productsService");


class ProductsController{
  static async getAllProducts(req, res, next){
    const products = await ProductService.serviceGetAllProduct(req, next);
    return products ? res.status(200).json(products) : res.sendStatus(404);
  };

 static async getProduct(req, res, next){
    const product = await ProductService.serviceGetProduct(req, next);
    return product ? res.status(200).json(product) : res.sendStatus(404);
  };

 static async productByCategory(req, res, next){
    const courses = await ProductService.serviceProductByCategory(req, next);
    return res.send(courses);
  };
  static async  updateProduct(req, res, next){
    const product = await ProductService.serviceUpdateProduct(req, next);
    return res.status(201).json(product);
  };
  

  static async addProduct(req, res, next){
    const product = await ProductService.serviceAddProduct(req, next);
    return res.status(201).send(product);
  };
  
  static async deleteProduct(req, res, next){
    const result = await ProductService.serviceDeleteProduct(req, next);
    result
      ? res.status(204).send([])
      : res.status(404).send("The course you want to delete doesn't exist.");
  };
}
module.exports= ProductsController;


