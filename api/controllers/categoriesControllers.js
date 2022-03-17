const CategoryService = require("../services/categoriesServices");

//OBTENER TODAS LAS CATEGORIAS
exports.getAll = async (req, res, next) => {
  const categories = await CategoryService.serviceGetAll(req, next);
  return categories ? res.json(categories) : res.sendStatus(404);
};

//OBTENER UNA CATEGORIA
exports.getOne = async (req, res, next) => {
 
  const category = CategoryService.serviceGetOne(req, next);
  return res.send(category);
};

//OBTENER PRODUCTO POR CATEGORIA
/* exports.getByCategory = async (req, res, next) => {
  const courses = await CategoryService.serviceGetByCategory(req, next);
  return res.send(courses);
}; */

//CREAR CATEGORIA
exports.newCategory = async (req, res, next) => {
  const category = await CategoryService.serviceNewCategory(req, next);
  return res.status(201).json(category);
};
//BORRAR CATEGORIA
exports.deleteCategory = async (req, res,next) => {
  await CategoryService.serviceDelete(req, next);

  return res.sendStatus(202);
};
// EDITAR CATEGORIA
exports.updateCategory = async (req, res, next) => {
  const category = await CategoryService.serviceEdit(req, next);
  return res.status(201).json(category);
};
