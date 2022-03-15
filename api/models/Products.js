const S = require("sequelize");
const db = require("../confDb");

class Products extends S.Model {}

Products.init(
  {
    productName: {
      type: S.STRING,
      allowNull: false,
    },
    price: {
      type: S.FLOAT,
      allowNull: false,
    },
    
    overview: {
      type: S.TEXT,
      allowNull: false,
    },
    image: {
      type: S.TEXT,
    },
    ranking: {
      type: S.FLOAT,
    },
    duration: {
      type: S.INTEGER,
    },
    students: {
      type: S.INTEGER,
    },
    requirements: {
      type: S.ARRAY(S.TEXT),
      defaultValue: [],
      get() {
        let value = this.getDataValue("favorites");
        return value;
      },
    },
  },
  {
    sequelize: db,
    modelName: "products",
  }
);

module.exports = Products;
