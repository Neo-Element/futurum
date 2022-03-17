const { Products, Categories } = require("../models");

//ALL PRODUCTS
exports.serviceGetAll = async (req, next) => {
  try {
    const products = await Products.findAll();
    return products;
  } catch (err) {
    next(err);
  }
};

//GET PRODUCT
exports.serviceGetProduct = async (req, next) => {
  try {
    const product = await Products.findByPk(req.params.id);
    return product;
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//GET PRODUCT BY CATEGORY
exports.serviceProductByCategory = async (req, next) => {
  try {
    const categories = await Categories.findAll({
      where: { name: req.params.id },
    });

    return categories;
  } catch (err) {
    next(err);
  }
};

//UPDATE PRODUCT
exports.serviceUpdateProduct = async (req, next) => {
  console.log("REQ", req.params);
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

//ADD PRODUCT
exports.serviceAddProduct = async (req, next) => {
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

//DELETE PRODUCT
exports.serviceDeliteProduct = async (req, next) => {
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
