const S = require("sequelize");
const db = require("../confDb");

class Products extends S.Model {}

Products.init(
  {
    productName: {
      type: S.STRING,
     
    },
    price: {
      type: S.FLOAT,
      
    },
    category: {
      type: S.STRING,
    },
    overview: {
      type: S.TEXT,
     ,
    },
    image: {
      type: S.TEXT,
    },
    ranking: {
      type: S.FLOAT,
    },
    review: {
      type: S.ARRAY(S.TEXT),
      defaultValue:[],
      
    },
    duration: {
      type: S.INTEGER,
    },
    students: {
      type: S.INTEGER,
    },
    requirements: {
      type: S.TEXT,
      
      },
    },
  
  {
    sequelize: db,
    modelName: "products",
  }
);

module.exports = Products;
