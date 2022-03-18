const { Products, Categories } = require("../models");


class ProductServices{
  static async serviceGetAllProduct(req, next){
    try {
      const products = await Products.findAll();
      return products;
    } catch (err) {
      next(err);
    }
    };
  
    static async serviceGetProduct(req, next){
      try {
        const product = await Products.findByPk(req.params.id);
        return product;
      } catch (err) {
        console.log(err);
        next(err);
      }
    };
    
   static async serviceProductByCategory(req, next){
      try {
        const products = await Products.findAll({
          where: { categoriesId : req.params.id },
        });
    
        return products;
      } catch (err) {
        next(err);
      }
    };
    
    
  static async serviceUpdateProduct(req, next){
      try {
        const result = await Products.update(req.body, {
          where: {
            id: req.params.productId,
          },
          returning: true,
          plain: true,
        });
        const product = result[1];
        return product;
      } catch (err) {
        next(err);
      }
    };
    
    static async serviceAddProduct(req, next){
      try {
        const { category } = req.body;
        const data = await Categories.findOrCreate({ where: { name: category } });
        const product = await Products.create(req.body);
        const categories = data[0];
        product.setCategories(categories);
        return product;
      } catch (err) {
        console.log(err);
        next(err);
      }
    };
    
   static async serviceDeleteProduct(req, next){
      try {
        const { productId } = req.query;
        const result = await Products.destroy({
          where: {
            id: productId,
          },
        });
        return result;
      } catch (err) {
        next(err);
      }
    };
}

module.exports= ProductServices;

