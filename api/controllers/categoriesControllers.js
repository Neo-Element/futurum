const CategoryService = require("../services/categoriesServices");

class CategoryController{

  static async getAllCategory (req, res, next) {
    const categories = await CategoryService.serviceGetAllCategories(req, next);
    return categories ? res.json(categories) : res.sendStatus(404);
  }

  
 static async getOneCategory(req, res, next){
    const category = CategoryService.serviceGetOne(req, next);
    return res.send(category);
  };

 
  static async newCategory (req, res, next)  {
    const category = await CategoryService.serviceNewCategory(req, next);
    return res.status(201).json(category);
  };
  
  static async deleteCategory(req, res, next) {
    await CategoryService.serviceDeleteCategory(req, next);
    return res.sendStatus(202);
  };
  
 
  static async updateCategory(req, res, next){
    const category = await CategoryService.serviceEditCategory(req, next);
    return res.status(201).json(category);
  };

}

module.exports= CategoryController;


