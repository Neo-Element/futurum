const S = require("sequelize");
const db = require("../confDb");
class Orders extends S.Model {}

Orders.init(
  {
    date: {
      type: S.DATE,
    },
  },
  {
    sequelize: db,
    modelName: "shopcart",
  }
);

module.exports = Orders;
