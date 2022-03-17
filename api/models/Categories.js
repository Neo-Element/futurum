const S = require("sequelize");
const db = require("../confDb");

class Categories extends S.Model {}

Categories.init(
  {
    name: {
      type: S.STRING,
    },
    description: {
      type: S.TEXT,
    },
    imagen: {
      type: S.TEXT,
    },
  },
  {
    sequelize: db,
    modelName: "categories",
  }
);
module.exports = Categories;
