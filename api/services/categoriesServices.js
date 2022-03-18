const { Categories } = require("../models");

class CategoryService{
  static async serviceGetAllCategories(req, next){
    try {
      const categories = await Categories.findAll();
      return categories;
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
  static async serviceGetOneCategory(req, next){
    try {
      const category = await Categories.findOne({ where: { id: req.params.id } });
      return category;
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
  static async serviceNewCategory(req, next){
    try {
      const category = await Categories.create(req.body);
      console.log(category.dataValues);
      return category.dataValues;
    } catch (err) {
      console.err(err);
      next(err);
    }
  };
   static async serviceDeleteCategory(req, next){
    try {
      await Categories.destroy({
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      next(err);
    }
  };
  static async serviceEditCategory(req, next){
    try {
      const result = await Categories.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
        plain: true,
      });
      const category = result[1];
      return category;
    } catch (err) {
      next(err);
    }
  };
}
module.exports= CategoryService;

