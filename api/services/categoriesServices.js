const { Categories } = require("../models");

//OBTENER TODAS LAS CATEGORIAS
exports.serviceGetAll = async (req, next) => {
  try {
    const categories = await Categories.findAll();
    return categories;
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//OBTENER UNA CATEGORIA
exports.serviceGetOne = async (req, next) => {
  try {
    const category = await Categories.findOne({ where: { id: req.params.id } });
    return category;
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//OBTENER PRODUCTO POR CATEGORIA
exports.serviceGetByCategory = async (req, next) => {
  try {
    const category = await Categories.findOne({
      where: { name: req.params.name },
    });
    const courses = await Products.findAll({
      where: { categoryId: category.id },
    });
    return courses;
  } catch (err) {
    next(err);
  }
};

//CREAR NUEVA CATEGORIA
exports.serviceNewCategory = async (req, next) => {
  try {
    const category = await Categories.create(req.body);
    console.log(category.dataValues);
    return category.dataValues;
  } catch (err) {
    console.err(err);
    next(err);
  }
};

//BORRAR UNA CATEGORIA
exports.serviceDelete = async (req, next) => {
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

//EDITAR CATEGORIA
exports.serviceEdit = async (req, next) => {
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
